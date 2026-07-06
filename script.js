// =======================
// ELEMENTS
// =======================

const introScreen = document.getElementById("introScreen");
const loadingScreen = document.getElementById("loadingScreen");
const tapScreen = document.getElementById("tapScreen");
const storyScreen = document.getElementById("storyScreen");
const gameScreen = document.getElementById("gameScreen");

const introVideo = document.getElementById("introVideo");
const storyVideo = document.getElementById("storyVideo");

const loadingProgress = document.getElementById("loadingProgress");

const tapButton = document.getElementById("tapButton");

const bgMusic = document.getElementById("bgMusic");


// Hide all screens
introScreen.style.display = "none";
loadingScreen.style.display = "none";
tapScreen.style.display = "none";
storyScreen.style.display = "none";
gameScreen.style.display = "none";


// =======================
// START INTRO
// =======================

introScreen.style.display = "flex";

introVideo.currentTime = 0;

introVideo.play().catch(()=>{});

// After 4 seconds
setTimeout(function(){

    introScreen.style.display = "none";

    startLoading();

},4000);


// =======================
// LOADING
// =======================

function startLoading(){

    loadingScreen.style.display = "flex";

    let value = 0;

    let loader = setInterval(function(){

        value++;

        loadingProgress.style.width = value + "%";

        // Stop at 50%
        if(value == 50){

            clearInterval(loader);

            // Wait 3 seconds
            setTimeout(function(){

                let loader2 = setInterval(function(){

                    value++;

                    loadingProgress.style.width = value + "%";

                    if(value >= 100){

                        clearInterval(loader2);

                        loadingScreen.style.display = "none";

                        tapScreen.style.display = "flex";

                    }

                },30);

            },3000);

        }

    },30);

}


// =======================
// TAP TO START
// =======================

tapButton.onclick = function(){

    tapScreen.style.display = "none";

    startStory();

};


// =======================
// STORY
// =======================

function startStory(){

    storyScreen.style.display = "flex";

    storyVideo.currentTime = 0;

    bgMusic.currentTime = 0;

    // Silent video
    storyVideo.muted = true;

    Promise.all([

        storyVideo.play(),

        bgMusic.play()

    ]).catch(err=>{

        console.log(err);

    });

    storyVideo.onended = function(){

        bgMusic.pause();

        bgMusic.currentTime = 0;

        storyScreen.style.display = "none";

        gameScreen.style.display = "flex";

    };

}