"use strict";
let prev_value = null;
let w_result = "";
let w_total = "";
let currentAudio = null;
let click_sound = new Audio("../sound/click.mp3");
let keyboard_array = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "c",
  "C",
  "Escape",
  "Backspace",
  "Delete",
  "+",
  "-",
  "*",
  "/",
  "=",
  "Enter",
];

const calcLog = document.getElementById("calcLog");
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");

buttons.addEventListener("click", (Event) => {
  if (Event.target.tagName !== "BUTTON") return;

  calculate(Event.target.value);
});

document.addEventListener("keydown", (Event) => {
  if (Event === "Enter") Event.preventDefault();

  if (keyboard_array.includes(Event.key)) calculate(Event.key);
});

function calculate(Event_value) {
  soundControl(click_sound);
  console.log(
    "prev_value:",
    prev_value,
    "w_result:",
    w_result,
    "w_total:",
    w_total,
    "calcLog:",
    calcLog.textContent,
    "result: ",
    result.textContent
  );

  if (
    Event_value === "C" ||
    Event_value === "c" ||
    Event_value === "Escape" ||
    Event_value === "Backspace" ||
    Event_value === "Delete"
  ) {
    calcLog.textContent = "";
    result.textContent = "";
    w_result = "";
    w_total = "";
  } else if (Event_value === "=" || Event_value === "Enter") {
    calcLog.textContent = w_result;
    try {
      w_total = eval(w_result);
      result.textContent = w_total.toLocaleString("ja-JP");
    } catch {
      result.textContent = "Error";
    }
  } else {
    if (prev_value === "=" || prev_value === "Enter") {
      calcLog.textContent = w_total;
      w_result = w_total;
    }

    w_result += Event_value;
    result.textContent = w_result.toLocaleString("ja-JP");
    calcLog.textContent += Event_value;
  }

  prev_value = Event_value;
  console.log(
    "prev_value:",
    prev_value,
    "w_result:",
    w_result,
    "w_total:",
    w_total,
    "calcLog:",
    calcLog.textContent,
    "result: ",
    result.textContent
  );
}

function soundControl(w_sound) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  w_sound.play().catch((error) => {
    if (error.name !== "AbortError") {
      console.error("再生エラー:", error);
    }
  });
  currentAudio = w_sound;
}
