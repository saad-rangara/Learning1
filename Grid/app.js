console.log("Hello");

const audioPlay = document.getElementById("audio-plays");
console.log(audioPlay);

const playButton = document.querySelector("#Play");
console.log(playButton);
const pauseButton = document.querySelector("#Pause");
const stopButton = document.querySelector("#Stop");
const skipButton = document.querySelector("#Skip");

function playAudio(){
    audioPlay.Play;
}
playButton.addEventListener("click", playAudio);

function pauseAudio(){
    audioPlay.Pause;
}
playButton.addEventListener("click", pauseAudio);

function stopAudio(){
    audioPlay.Pause;
    audioPlay.currentTime = 0;
}
playButton.addEventListener("click", stopAudio);

function skipAudio(){
    audioPlay.Pause;
    audioPlay.currentTime = currentTime+5;
}
playButton.addEventListener("click", skipAudio);