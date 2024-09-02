const clockElement = document.getElementById('clock');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmButton = document.getElementById('set-alarm');
const alarmListElement = document.getElementById('alarm-list');
// taking empty array for storing the alarms.
let alarms = [];

// clock function
function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const AMPM = now.getHours() >= 12 ? 'PM' : 'AM';

    clockElement.textContent = `${hours.toString().padStart(2, '0')} : ${minutes} : ${seconds} : ${AMPM}`;
    checkAlarm();
}
// setInterval to update the clock at every 1000 ms. 
setInterval(() => {
    updateClock();
}, 1000);

// checking the alarm function at every 1 second 
function checkAlarm(){
    
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const AMPM = now.getHours() >= 12 ? 'PM' : 'AM';
    const currentTime = `${hours.toString().padStart(2, '0')} : ${minutes} : ${seconds} : ${AMPM}`;
    // console.log(alarmTime);
    // console.log(currentTime);
    
    
    alarms.forEach(alarm => {
        if(alarm.time === currentTime){
            console.log("working");
            alert(`Alarm is ringing : ${alarm.time}`)
        }
    })
}

// setalarm in the clock 
alarmButton.addEventListener('click', setAlarm);

function setAlarm() {
    const alarmTime = alarmTimeInput.value;
    
    
    if (alarmTime) {
        const [hours, minutes, seconds] = alarmTime.split(':').map(Number);
        const AMPM = hours >= 12 ? 'PM' : 'AM';
        const newHour = (hours % 12 || 12).toString().padStart(2, '0');
        const newAlarmTime = `${newHour} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} : ${AMPM}`;

        alarms.push({ time: newAlarmTime });
        console.log("alarms", alarms);
        updateAlarmList();

        alarmTimeInput.value = '';
        
    }

}

// updating the clock list in frontend
function updateAlarmList(){
    alarmListElement.innerHTML = '';

    alarms.forEach((times, index)=>{
        const alarmItem = document.createElement('div');
        alarmItem.className = 'alarm-item w-full flex justify-between items-between mb-2 text-2xl ';
        alarmItem.innerHTML = `<span>${times.time}</span>
        <button onclick='deleteAlarm(${index})' class='bg-red-700 text-white py-2 px-5 rounded-xl'>Delete</button>
        `
        alarmListElement.appendChild(alarmItem);

        // console.log("pushing the times to UI", times.time);
        
    })
}

// deleting the alarm item from the UI 
function deleteAlarm(i){
    alarms.splice(i, 1);
    updateAlarmList();
}

