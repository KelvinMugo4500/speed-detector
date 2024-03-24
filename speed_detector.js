let carSpeed = prompt("Enter the speed of the car (in km/h):");

carSpeed = parseFloat(carSpeed);

const speedLimit = 70;

if (carSpeed <= speedLimit) {
    console.log("Ok");
} else {

    const demeritPoints = Math.floor((carSpeed - speedLimit) / 5);

    console.log(`Points: ${demeritPoints}`);

    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}
