


setInterval(function () {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let day = weekday[d.getDay()];
let year = d.getFullYear();
let hrs = d.getHours();
let mins = d.getMinutes();
let sec = d.getSeconds();
let months = month[d.getMonth()];
let date = d.getUTCDate();

document.getElementById("demo").innerHTML = day+"-"+year+"-"+hrs+"-"+mins+"-"+sec+"-"+months;

    document.getElementById("hrs").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("sec").innerHTML = sec;

    document.getElementById("date").innerHTML = date;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = day;
    document.getElementById("year").innerHTML = year;
},1000);
