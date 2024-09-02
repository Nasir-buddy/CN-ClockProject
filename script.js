// selecting the clock element to show the clock 
const clockElement = document.getElementById('clock');
const hourElement = document.getElementById('hours');
const minuteElement = document.getElementById('minutes');
const secondElement = document.getElementById('seconds');
const AM_PM = document.getElementById('AM-PM');

// selecting the alarm time input box to select the alarm time  
const alarmTimeInput = document.getElementById('alarm-time');

// selecting the alarm button to set the alarm by clicking the element 
const alarmButton = document.getElementById('set-alarm');

// alarm list UI selection to show the listed alarm 
const alarmListElement = document.getElementById('alarm-list');


// taking empty array for storing the alarms.
let alarms = [];

// clock function
function updateClock() {
    // extracting the current date
    const now = new Date();
    // current hour and mod by 12 to get 12 hour time system 
    const hours = now.getHours() % 12 || 12;
    // current minutes
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // current seconds
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // setting condition for AM and PM if hour is greater then 12 then its AM 
    const AMPM = now.getHours() >= 12 ? 'PM' : 'AM';


    // showing all the time on the clock element on the HTML 
    // clockElement.textContent = `${hours.toString().padStart(2, '0')} : ${minutes} : ${seconds} : ${AMPM}`;
    hourElement.textContent = `${hours.toString().padStart(2, '0')}`;
    minuteElement.textContent = `${minutes}`;
    secondElement.textContent = `${seconds}`;
    AM_PM.textContent = `${AMPM}`;
    // calling the check alarm function. 
    checkAlarm();
}
// setInterval to update the clock at every 1000 ms. 
setInterval(() => {
    // calling the update clock function 
    updateClock();
}, 1000);



// setalarm in the clock 
alarmButton.addEventListener('click', setAlarm);


// set alarm function 
function setAlarm() {
    // storing the given value of the alarm on the html in hte alarm time variable 
    const alarmTime = alarmTimeInput.value;
    
    // condition for setting alarm 
    if (alarmTime) {
        // extracting the string value and converth the time string into the number 
        const [hours, minutes, seconds] = alarmTime.split(':').map(Number);
        // storing the am and pm 
        const AMPM = hours >= 12 ? 'PM' : 'AM'; 
        // storing the new hour to a new variable 
        const newHour = (hours % 12 || 12).toString().padStart(2, '0');
        // storing the new alarm time in the new alarm time variable 
        const newAlarmTime = `${newHour} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${AMPM}`;

        // pushing the alarm time objects into the array by push method
        alarms.push({ time: newAlarmTime });

        // calling the update alarm list function ;
        updateAlarmList();

        // setting the value of input blank after setting the alarm 
        alarmTimeInput.value = '';
        
    }

}

// updating the clock list in frontend
function updateAlarmList(){
    // clearing the previous set alarm  time from the inner html  
    alarmListElement.innerHTML = '';

    // iterating on the array to update the alarm 
    alarms.forEach((times, index)=>{
        // creating the div to store a new alarm 
        const alarmItem = document.createElement('div');
        // setting up class for that div
        alarmItem.className = 'alarm-item w-full flex justify-between items-between mb-2 text-2xl ';
        // setting the innner HTML of alarm 
        alarmItem.innerHTML = `<span>${times.time}</span>
        <button onclick='deleteAlarm(${index})' class='bg-red-700 text-white py-2 px-5 rounded-xl'>Delete</button>
        `
        // appending the alarm time into the clock 
        alarmListElement.appendChild(alarmItem);        
    });
}


// checking the alarm function at every 1 second 
function checkAlarm(){
    
    // extracting the new date
    const now = new Date();
    // extracting the hours
    const hours = now.getHours() % 12 || 12;
    // extracting the minutes 
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // extracting the seconds 
    const seconds = now.getSeconds().toString().padStart(2, '0');
    // setting up the AM and PM 
    const AMPM = now.getHours() >= 12 ? 'PM' : 'AM';
    // extracting the current time from the previours variable of the time 
    const currentTime = `${hours.toString().padStart(2, '0')} : ${minutes} : ${seconds} : ${AMPM}`;
    
    
    // iterating on the alarm array to checking the alarm 
    alarms.forEach(alarm => {
        // condition to check the alarm 
        if(alarm.time === currentTime){
            // show the alery on the window of the browser 
            alert(`Alarm is ringing : ${alarm.time}`)
        }
    });
};


// deleting the alarm item from the UI 
function deleteAlarm(i){
    // using the splice function by passing the index and 1 to remove 1 item from that index
    alarms.splice(i, 1);
    // reupdate the alarm clock UI
    updateAlarmList();
}

