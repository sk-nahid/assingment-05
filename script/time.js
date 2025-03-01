const date = new Date();
const amPm = date.toLocaleTimeString('en-Us')
const currentDate = date.toLocaleDateString('en-Us');
const day = date.getDay();
console.log(`Current day is: ${day}`)
console.log(`Current date is: ${currentDate}`);

console.log(`Current time is: ${amPm}`);