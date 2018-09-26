const myVoice = document.querySelector("audio");
const playAudioButton = document.querySelector(".play-audio");

playAudioButton.onclick = function playAudio() {
    myVoice.play();
};