chrome.alarms.create("drinkWaterReminder", {
    periodInMinutes: 60
})

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'drinkWaterRimender') {
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "images/icon128.png",
            title: "Time to drink water",
            message: "Stay hydrated! Remeber to drink a glass of water."

    });
    }
});