
// const secondHand = document.querySelector('.second-hand');

// console.log(secondHand);
// console.log(document.querySelector('.second-hand'));
// document.querySelector('.second-hand');

//------

 function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsTime = ((seconds / 60) * 360) + 90;
    document.querySelector('.second-hand').style.transform = `rotate(${secondsTime}deg)`;
    console.log(seconds);

    const mins = now.getMinutes();
    const minsTime = ((mins / 60) * 60) + 90;
    document.querySelector('.min-hand').style.transform = `rotate(${minsTime}deg)`;
    console.log(mins);

    const hours = now.getHours();
    const hoursTime = ((hours / 24) * 60) + 90;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursTime}deg)`;
    console.log(hours);
 }

 setInterval(setDate, 1000);

 setDate();
