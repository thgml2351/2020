const remaining = document.querySelector("h3");

function getTime() {
  const Dday = new Date("2020-12-24 00:00:00");
  const now = new Date();
  const gap = Dday - now;

  const Day = Math.floor(gap / (1000 * 60 * 60 * 24)); //일
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24); //시
  const minutes = Math.floor((gap / (1000 * 60)) % 60); //분
  const seconds = Math.floor((gap / 1000) % 60); //초

  remaining.innerText = `${Day < 10 ? `0${Day}` : Day}d : ${
    hours < 10 ? `0${hours}` : hours
  }h : ${minutes < 10 ? `0${minutes}` : minutes}m : ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
