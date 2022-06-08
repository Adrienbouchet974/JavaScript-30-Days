const seconds_hand = document.querySelector('.sec_hand');
const minutes_hand = document.querySelector('.min_hand');
const hours_hand = document.querySelector('.hour_hand');
console.log(seconds_hand);
console.log(minutes_hand);
console.log(hours_hand);

function setDate(){
    const now = new Date();
    const secs = now.getSeconds();
    const secs_degrees = ((secs / 60) * 360) + 90;
    seconds_hand.style.transform = `rotate(${secs_degrees}deg)`;

    const minutes = now.getMinutes();
    const minutes_degrees = ((minutes / 60) * 360) + 90;
    minutes_hand.style.transform = `rotate(${minutes_degrees}deg)`;

    const hours = now.getMinutes();
    const hours_degrees = ((hours / 12) * 360) + 90;
    hours_hand.style.transform = `rotate(${hours_degrees}deg)`;

}

setInterval(setDate, 1000);