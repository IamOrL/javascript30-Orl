window.addEventListener('load', (event) => {

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

 function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsTime = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsTime}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsTime = ((mins / 60) * 60) + 90;
    minsHand.style.transform = `rotate(${minsTime}deg)`;
    console.log(mins);

    const hours = now.getHours();
    const hoursTime = ((hours / 24) * 60) + 90;
    hoursHand.style.transform = `rotate(${hoursTime}deg)`;
    console.log(hours);
 }

 setInterval(setDate, 1000);

 setDate();
});
