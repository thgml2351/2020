const title = document.querySelector("#title");

function handleResize(event) {
  title.innerHTML = "Hi! Form JS";
}
window.addEventListener("resize", handleResize);

function handleClick() {
  title.style.color = "red";
}
title.addEventListener("click", handleClick);

function handlemouseover() {
  title.style.color = "blue";
}
title.addEventListener("mouseover", handlemouseover);
