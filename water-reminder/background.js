// This is the background script that listens for alarms
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "drinkWaterReminder") {
        chrome.notifications.create("", {
            type: "basic",
            iconUrl: "images/icon128.png",
            title: "Time to Drink Water",
            message: "Stay hydrated! Remember to drink a glass of water."
        });
    }
});
