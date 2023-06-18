let message;

validateSpeed(speed)

if (speed < speedLimit) {
    message = 'Ok'
} else {
    let excessSpeed = speed - speedLimit
    let demeritPoints = Math.trunc(excessSpeed / demeritBounds)
    message = (demeritPoints>12) ? 'License suspended' : `Points: ${demeritPoints}`
}
console.log(message)
function validateSpeed(carSpeed) {
    if (carSpeed.length === 0 || Number.isNaN(Number(carSpeed)) || carSpeed < 0) {
        if (confirm('Invalid car speed. Try again ?')) {
            speed = prompt('Enter valid car speed : ')
            validateSpeed(speed)
        }
    } else {
        speed = parseFloat(carSpeed)
    }
}
