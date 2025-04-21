
const secHand = document.querySelector('.sec-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

let lastSecDegrees = 90; // Keep track of the previous angle

function setDate() {
    const today = new Date();
    const second = today.getSeconds();
    const minute = today.getMinutes()
    const hour = today.getHours()

    // 90 is initial offset
    let secDegrees = (6 * second) + 90;
    let minDegrees = minutesToDegrees(minute, second) + 90;
    let hourDegrees = calculateHourHandPosition(hour, minute, second) + 90;

    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(`time:${hour}:${minute}:${second}`)

}

function minutesToDegrees(minutes, seconds) {
    return ((minutes * 60 + seconds) / 3600) * 360;
}

function calculateHourHandPosition(hours, minutes, seconds) {
    return ((hours * 60 * 60 + (minutes * 60) + seconds) / 43200) * 360;
}


setInterval(setDate, 1000);




