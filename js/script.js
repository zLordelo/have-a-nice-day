const music = document.querySelector('#music')

let playPause = () => {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
}

let mute = () => {
    if (!music.paused && !music.muted) {
        music.muted = true
    } 
}

let unmute = () => {
    if (!music.paused && music.muted) {
        music.muted = false
    } 
}

const darkMode = () => {
    let darkModeColor = 'rgb(0, 0, 0)'
    let backgroundColor = document.body.style.backgroundColor
    if (backgroundColor != darkModeColor){
        document.body.style.backgroundColor = "#000"
    } else {
        document.body.style.backgroundColor = "#F2D54B"
    }
    
}

const video = document.getElementById('video');
const playButton = document.getElementById('btnPlay');

playButton.addEventListener('click', event => {
    const constraints = {
      video: true,
      audio: false
    };
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        video.srcObject = stream;
      })
      .catch(error => {
        console.error(error);
      });
});