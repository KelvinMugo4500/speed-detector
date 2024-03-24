# Speed Detector

This is a JavaScript program that checks the speed of a car and calculates demerit points based on the speed limit. It also determines if the driver's license should be suspended based on the total demerit points.

## Functions

- `calculateDemeritPoints(speed)`: Calculates demerit points based on the speed of the car and the speed limit.
- `checkLicenseStatus(demeritPoints)`: Checks if the driver's license should be suspended based on the total demerit points.

## Example

```javascript
const speed = 80;
const demeritPoints = calculateDemeritPoints(speed);
checkLicenseStatus(demeritPoints);
