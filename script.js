
let currday = document.querySelector(".day");
let currdate = document.querySelector(".date");
let currtime = document.querySelector(".time");
let currmerd = document.querySelector(".merd");

setInterval(() => {
    // let days = ["Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let date = time.getDate();
    let day = days[time.getDay()];
    let merd;
    let noon = hour>=12 ? merd="PM" : merd="AM";
    currdate.textContent = date;
    currday.textContent = day;
    currmerd.textContent = merd;
    currtime.textContent=Math.abs(hour)+":" +minute+ ":" +second;
    
},1000);
