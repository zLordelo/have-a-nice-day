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
    width: 350,
    height: 420,
    };

    navigator.mediaDevices
    .getUserMedia(constraints)
    .then((stream) => {
        video.srcObject = stream;
    })
    .catch((error) => {
        console.error(error);
    });
});