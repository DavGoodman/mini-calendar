const monthIndex = new Date().getMonth()
const currentDay = new Date().getDate()
const weekdayIndex = new Date().getDay()
const currentYear = new Date().getFullYear()

const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate(); // 0 gets the last day of the previous month
const months = [
    "January", 
    "Febuary", 
    "March", 
    "Aprlil", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November",
    "December"];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]


const calendarEl = document.querySelector(".calendar")

function updateView(){
    calendarEl.innerHTML = `
            <h2 class="month">${months[monthIndex]}</h2>
            <div class="weekday">${weekdays[weekdayIndex]}</div>
            <h1 class="date">${currentDay}</h1>
            <div class="year">${currentYear}</div>`
}

updateView()