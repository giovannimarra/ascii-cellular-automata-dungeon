let song; 

function preload(){
    soundFormats("mp3");
    song = loadSound("Secret of the Forest 8 Bit Remix - Chrono Trigger (Konami VRC6).mp3");
}

function setup(){
    createCanvas(1, 1);
    backgroundMusic();
}

function backgroundMusic(){
    song.play();
    song.loop();
    song.setVolume(0.2);
    userStartAudio();
}
