const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-grettings");

//유저 이름
const USER_LS = "currentUser",
  showing_CN = "showing";

//4번
function saveName(text) {
  //localStorage에 USER_LS, text 넣어주고 (확인)
  //text는 value
  //USER_LS는 currentUser
  localStorage.setItem(USER_LS, text);
}

//3번
function handleSubmit(event) {
  //잡 이벤트를 지우고
  event.preventDefault();
  //input 의 value을 crrentValue에 넣고  (변수)
  const currentValue = input.value;
  //currentValue을 각각 paintGreeting, saveName에
  saveName(currentValue);
  paintGreeting(currentValue);
}

//2번
function askForName() {
  //input에 form을 지우고
  input.classList.remove("form");
  //input에 showing을 넣어주고
  input.classList.add(showing_CN);
  //submit을 하면 -->  handleSubmit 넘어가
  form.addEventListener("submit", handleSubmit);
}

//5번
function paintGreeting(text) {
  //input에 showing_CN을 지우고 (class = ?)
  input.classList.remove(showing_CN);
  //input에  form을 추가한다 (class = ?)
  input.classList.add("form");
  //greeting에 greeting을 지우고 (class = ?)
  greeting.classList.remove("greetings");
  //greeting에 showing_CN 추가 (class = ?)
  greeting.classList.add(showing_CN);
  //innerText는 text을 추가 하는것
  //${text} 위에있는 value을 가지고 온것
  greeting.innerText = `Hello ${text}`;
  //끝
}

// 1번
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

  //만약에 currentUser가 null 이면
  if (currentUser == null) {
    //askForName 넘어가고
    askForName();
  } else {
    //paintGreeting 넘어가는거 (있으면)
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
