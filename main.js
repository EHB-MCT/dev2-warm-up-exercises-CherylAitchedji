import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";

runTitle();
warmup1();

function warmup1() {
  //buttons
  const button1a = document.getElementById("button-1a");
  const button1b = document.getElementById("button-1b");
  const button1c = document.getElementById("button-1c");
  //button 1a: change element <p> from content 1
  button1a.addEventListener("click", function () {
    const newElement = (document.getElementById("content-1").innerHTML =
      "<p> Hello to the best girl of the world: CHERYYYLLLLL </p>");
  });
  //button 1b: change background color from section 1 (selecting section1)
  const section1 = document.querySelector("#section-1");
  button1b.addEventListener("click", function () {
    section1.style.background = "lightblue";
  });
  //button 1c: append new element in content 1 by creating a html element
  button1c.addEventListener("click", function () {
    const content1 = document.getElementById("content-1");
    const newElement = document.createElement("h1");
    newElement.innerHTML = "<h1>I'm readyyyyyyyyyy</h1>";
    content1.append(newElement);
  });
}

function warmup2() {
  console.log("Exercise week 2");
  const scores = getRandomScores(10);
}

function warmup3() {
  let student = getStudentJSON();
}

function warmup4() {
  let main, min, max;
}

function warmup5() {}
