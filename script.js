// const newYear = "Dec 30,2023 24:00:00";
let CountDownDate = new Date("Dec 30, 2022 23:59:59").getTime();

const Day = document.getElementById('days');
const Hours = document.getElementById('hours');
const Mins = document.getElementById('mins');
const Secs = document.getElementById('secs');


// let today = new Date().getTime();
// let timeLeft = CountDownDate - today;
// // console.log(timeLeft)
// console.log(today)
// console.log(CountDownDate)

// document.addEventListener('click', myFunc);


let myFunc = setInterval(function() {
    let today = new Date().getTime();
    let timeLeft = CountDownDate - today;

    let first = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let second = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let third = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let fourth = Math.floor((timeLeft % (1000 * 60)) / 1000);
    Day.innerHTML = first;
    Hours.innerHTML = second;
    Mins.innerHTML = third;
    Secs.innerHTML = fourth;
    if (timeLeft < 0) {
        Day.innerHTML = "TIME UP"
        Hours.innerHTML = "TIME UP"
        Mins.innerHTML = "TIME UP"
        Secs.innerHTML = "TIME UP"
    }
}, 1000);



// Day.innerHTML="TIME UP";
// console.log(Day)