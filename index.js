const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();
const month = date.getMonth();
const day = date.getDay();
const dayNum = date.getDate();
const year = date.getFullYear();

monthNameEl.innerText = date.toLocaleString('en', {
    month: 'long'
})

dayNameEl.innerText = date.toLocaleString('en', {
    weekday: 'long'
})

dayNumEl.innerText = dayNum;

yearEl.innerText = year;