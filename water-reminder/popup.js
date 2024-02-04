
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const nextAlarm = document.getElementById('nextAlarm');

    startButton.addEventListener('click', () => {
        chrome.alarms.create("drinkWaterReminder", {
            periodInMinutes: 60
        });
        updateNextAlarmTime();
    });

    stopButton.addEventListener('click', () => {
        chrome.alarms.clear("drinkWaterReminder");
        nextAlarm.textContent = 'Next alarm in: --:--';
    });

    function updateNextAlarmTime() {
        chrome.alarms.get("drinkWaterReminder", (alarm) => {
            if (alarm) {
                const timeUntilAlarm = Math.round((alarm.scheduledTime - Date.now()) / 60000);
                nextAlarm.textContent = `Next alarm in: ${timeUntilAlarm} minutes`;
            } else {
                nextAlarm.textContent = 'Next alarm in: --:--';
            }
        });
    }

    updateNextAlarmTime();
});
