const date = new Date();               

function calculateTime(city, offset) {
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    newDate = new Date(utc + (3600000 * offset));
    return city + newDate.toLocaleTimeString();
}

module.exports = {
    calculateTime
}

// //new york time
// console.log(calculateTime('New York ', '-5'));

// //cali time
// console.log(calculateTime('California ', '-8'));

// //colorodo time
// console.log(calculateTime('Colorodo ', '-7'));

// [-5, 'America/New_York'],
// [-8, 'America/California'],
// [-7, 'America/Colorodo'],
// [0, 'GMT']
