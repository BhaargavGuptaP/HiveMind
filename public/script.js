import "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
// script.js
import axios from "axios";

function myfunction() {
  window.location.href = "hivemind.html";
}

function nxt() {
  let name1 = document.getElementById("ideaTitle");
  let desc1 = document.getElementById("ideaDescription");
  let tech1 = document.getElementById("technicalField");
  let cl1 = document.getElementById("claims");
  let w1 = document.getElementById("walletAddress");
  let d1 = document.getElementById("documentUpload");
  var name = name1.value;
  var desc = desc1.value;
  var tech = tech1.value;
  var cl = cl1.value;
  var w = w1.value;
  var d = d1.value;
  let list = document.querySelectorAll(".list");
  let cnt = document.querySelectorAll(".qqq");
  list[1].className = "list";
  list[2].className = "list active";
  cnt[1].className = "qqq";
  cnt[2].className = "qqq active";

  // document.getElementById("ideanm").textContent = "Idea Name:  " + name;
  // document.getElementById("ideads").textContent = "Idea Description:  " + desc;
  // document.getElementById("idepr").textContent = "Technical Field:  " + tech;
  name1.value = "";
  desc1.value = "";
  tech1.value = "";
  cl1.value = "";
  w1.value = "";
  d1.value = "";
}
