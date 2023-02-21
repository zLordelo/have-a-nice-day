const music = document.querySelector("#music");
const startPage = document.querySelector("#startPage");
const btnStart = document.querySelector("#startButton");
const page1 = document.querySelector("#page1");
const page2 = document.querySelector("#page2");

btnStart.addEventListener("click", () => {
  startPage.classList.add("hidden");
  music.play()
  page1.classList.remove("hidden");
});

let playPause = () => {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
};

let mute = () => {
  if (!music.paused && !music.muted) {
    music.muted = true;
  }
};

let unmute = () => {
  if (!music.paused && music.muted) {
    music.muted = false;
  }
};

const video = document.getElementById("video");
const btnCamera = document.getElementById("camera");

btnCamera.addEventListener("click", (event) => {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");

    const constraints = {
    video: { facingMode: "user" },
    audio: false,
    width: 1920,
    height: 1080,
    };

    navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error(error);
        page2.innerHTML = 
            `<div class='content'>
                <p class='text'>Vi que você nao aceitou o acesso a camera :(
                <br>Bloqueia o celular, foca no reflexo.<br>Percebe que tem uma mulher muito linda olhando, é você!<br><br>
                Te desejo uma ótima semana. &#127803;&#128147;</p>
            </div>`
    });
});