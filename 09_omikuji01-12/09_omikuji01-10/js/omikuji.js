"use strict";

let currentAudio = null;
let omikuji_sound1 = new Audio("./sound/omikuji_sound1.mp3");
let omikuji_sound2 = new Audio("./sound/omikuji_sound2.mp3");
let omikuji_sound3 = new Audio("./sound/omikuji_sound3.mp3");
let omikuji_sound4 = new Audio("./sound/omikuji_sound4.mp3");
let omikuji_sound5 = new Audio("./sound/omikuji_sound5.mp3");
let omikuji_sound6 = new Audio("./sound/omikuji_sound6.mp3");
let resultSound = [
  omikuji_sound1,
  omikuji_sound2,
  omikuji_sound3,
  omikuji_sound4,
  omikuji_sound5,
  omikuji_sound6,
];
window.addEventListener(
  "DOMContentLoaded",
  function () {
    //ページ本体が読み込まれたタイミングで実行すろコード
    $("header").textillate({
      loop: false,
      minDisplaytime: 9000,
      initialDelay: 1000,
      autoStart: true,
      int: {
        effect: "fadeInLeftBig",
        delayScale: 1.5,
        delay: 50,
        sync: false,
        shuffle: true,
      },
    });

    $(function () {
      ScrollReveal().reveal("#btn1", { duration: 9000 });
    });

    this.setTimeout(function () {
      let popMessage = "いらっしゃい！　おみくじ引いてって！";
      this.window.alert(popMessage);
    }, "3000");
  },
  false
);

const btn1 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
btn1.addEventListener(
  "click",
  function () {
    let resultText = [
      "大吉!!!!!",
      "吉!!!!",
      "中吉!!!",
      "小吉!!",
      "末吉!",
      "凶..",
    ];
    let resultColor = [
      "#fff2ba",
      "#0f3c65",
      "#9a0002",
      "#efe6de",
      "#f2c4ce",
      "#062045",
    ];
    let resultFontSize = ["80px", "70px", "60px", "50px", "40px", "30px"];
    let resultMaxSpeed = [20, 15, 10, 5, 5, 5];
    let resultMaxSize = [35, 30, 20, 10, 20, 30];
    let resultMinSize = [20, 15, 10, 8, 10, 15];
    let resultMinSpeed = [3, 7, 6, 8, 4, 10];
    let resultImage = [
      "./img/bluepetals.png",
      "./img/pinkpetals.png",
      "./img/leaf.png",
      "./img/sakura.png",
      "./img/star.png",
      "./img/snowflakes.png",
    ];

    let n = Math.floor(Math.random() * resultText.length);

    omikujiText.textContent = resultText[n];
    omikujiText.style.color = resultColor[n];
    omikujiText.style.fontSize = resultFontSize[n];
    soundControl(resultSound[n]);

    $(document).snowfall("clear");

    $(document).ready(function () {
      $(document).snowfall({
        maxSpeed: resultMaxSpeed[n],
        minSpeed: resultMinSpeed[n],
        maxSize: resultMaxSize[n],
        minSize: resultMinSize[n],
        image: resultImage[n],
      });
    });
  },
  false
);

function soundControl(w_sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  w_sound.play();

  currentAudio = w_sound;
}
