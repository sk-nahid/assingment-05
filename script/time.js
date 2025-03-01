const date = new Date();
const day = date.toDateString()
const p = document.createElement('p');
p.innerText = `${day}`
document.getElementById('date').appendChild(p)