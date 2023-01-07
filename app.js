const months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'

];

const weekdays = [
    'Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday',
    'Saturday'

];

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempdate = tempDate.getDate();
let tempDay = tempDate.getDate();
//months arfe zero index based
const futureDate = new Date(tempYear, tempMonth, tempdate + 1, tempDay, 11, 30, 0);
//let future date is newDate(2022, 3, 24, 11, 30, 0) 

const year = futureDate.getFullYear();
// console.log(year);

const month = futureDate.getMonth();
const monthAlpha = months[month];
// console.log(months[month]);

const date = futureDate.getDate()
// console.log(date);



const day = futureDate.getDay();
const weekday = weekdays[day];
// console.log(weekday);

const hours = futureDate.getHours();
// console.log(hours);

const minute = futureDate.getMinutes();
// console.log(minute)

//select h4 element

const giveawayEle = document.querySelector('.giveaway');
// console.log(giveawayEle);
giveawayEle.textContent = `giveAway ends on ${hours}:${minute} PM, ${weekday} , ${date} , ${monthAlpha} ${year} ,  `


//selecting all h4 elements

const items_h4 = document.querySelectorAll(".deadline-format h4");
console.log(items_h4);
console.log(typeof items_h4); //object

function getRemainingTime() {
    const futureMilliSec = futureDate.getTime();
    // console.log(futureTime);
    //this getTime method returns number of milliseconds since jan1, 1970.
    const todayMilliSec = new Date().getTime();
    // console.log(todayMilliSec);

    const t = futureMilliSec - todayMilliSec;
    console.log(t);
    //1sec = 1000 milliseconds

    const oneday = 24 * 60 * 60 * 1000;  //number of milliseconds of a day.
    const oneHour = 60 * 60 * 1000;      //millisec-hour.
    const oneMinute = 60 * 1000;          //millsec-a-min.
    let days_Remaining = Math.floor(t / oneday);
    // console.log(days_Remaining);
    let hours_remaining = Math.floor((t % oneday) / oneHour);
    let minutes_remaining = Math.floor((t % oneHour) / oneMinute);
    let seconds_remaining = Math.floor((t % oneMinute) / 1000);

    let values = [days_Remaining, hours_remaining, minutes_remaining, seconds_remaining];


    items_h4.forEach(function (item, index) {
        item.innerHTML = values[index];
    });

    if (t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
    }
}


// let countdown = setInterval(getRemainingTime, 1000)



