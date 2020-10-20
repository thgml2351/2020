var select_week = document.getElementById("select");

function s_select() {
  localStorage.setItem("week", this.value);
}

function init() {
  select_week.addEventListener("change", s_select);
  var week = localStorage.getItem("week");

  if (week) {
    for (i = 0; i < select_week.length; i++) {
      if (select_week.options[i].value == week) {
        +select_week.options[i].selected = true;
      }
    }
  }
}
init();
