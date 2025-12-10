/**
 * @param {string} fromTime - The current time in elf format
 * @param {string} takeOffTime - The take off time in elf format
 * @returns {number} The time in seconds until take off
 */
function timeUntilTakeOff(fromTime, takeOffTime) {
  const fromTimeSplitted = fromTime.split(/[*@| ]+/);
  const takeOffTimeSplitted = takeOffTime.split(/[*@| ]+/);

  const fromDate = new Date(Date.UTC(fromTimeSplitted[0], (fromTimeSplitted[1] - 1), fromTimeSplitted[2], fromTimeSplitted[3], fromTimeSplitted[4], fromTimeSplitted[5]));
  const takeDate = new Date(Date.UTC(takeOffTimeSplitted[0], (takeOffTimeSplitted[1] - 1), takeOffTimeSplitted[2], takeOffTimeSplitted[3], takeOffTimeSplitted[4], takeOffTimeSplitted[5]));

  return ((takeDate - fromDate) / 1000);
}

// Ejemplos:

const takeoff = '2025*12*25@00|00|00 NP';

// desde el 24 diciembre 2025, 23:59:30, 30 segundos antes del despegue
console.log(timeUntilTakeOff('2025*12*24@23|59|30 NP', takeoff));
// 30

// justo en el momento exacto
console.log(timeUntilTakeOff('2025*12*25@00|00|00 NP', takeoff));
// 0

// 12 segundos después del despegue
console.log(timeUntilTakeOff('2025*12*25@00|00|12 NP', takeoff));
// -12
