var date = new Date();               

function calcTime(city, offset) {
    utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    newDate = new Date(utc + (3600000 * offset));
    return city + newDate.toLocaleTimeString();
}

//new york time
console.log(calcTime('New York ', '-5'));

//cali time
console.log(calcTime('California ', '-8'));

//colorodo time
console.log(calcTime('Colorodo ', '-7'));

// [-5, 'America/New_York'],
// [-8, 'America/California'],
// [-7, 'America/Colorodo'],
// [0, 'GMT']

module.exports = {
    calcTime
}
