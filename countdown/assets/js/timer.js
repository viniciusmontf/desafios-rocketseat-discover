let countDownDate = new Date("Mar 30, 2024 19:00:00").getTime();

let countdown = setInterval(function(){

    let today = new Date().getTime();
    let distance = countDownDate - today;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + "d "
    document.getElementById("hours").innerHTML = hours + "h " 
    document.getElementById("minutes").innerHTML = minutes + "m " 
    document.getElementById("seconds").innerHTML = seconds + "s"

    if (distance < 0){
        countDownDate = new Date("Mar 30, 2025 19:00:00").getTime();
    }
}, 1000);