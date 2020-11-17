$(document).ready(function() {
    $("#button").click(function(){
        alert("hello");
    });

    const Dday = new Date("2020-12-24 00:00:00");
    const now = new Date();
    const gap = Dday - now;

    const Day = Math.floor(gap / (1000 * 60 * 60 * 24)); //일
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24); //시
    const minutes = Math.floor((gap / (1000 * 60)) % 60); //분
    const seconds = Math.floor((gap / 1000) % 60); //초

    $("#timer").click(function(){
        alert("hello");
    });
});