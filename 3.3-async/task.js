"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            try {
                throw new Error('Невозможэно индентифицировать будильник. Параметр id не передан');
            } catch (e) {
                return console.error(e);
            }
        }
        if ((this.alarmCollection.some(el => el.id === id))) {
            return console.error("Будильник с таким id уже существует");
        }
        return this.alarmCollection.push({ "id": id, "time": time, "callback": callback });
    }

    removeClock(id) {
        if ((this.alarmCollection.filter((el) => el.id === id)).length === 0) {
            return console.log(false);
        } else {
            this.alarmCollection = this.alarmCollection.filter((el) => el.id !== id);
            return console.log(true);
        }
    }
    getCurrentFormattedTime() {
        let date = new Date();
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start() {
        let result = 0;
        let arrClock = this.alarmCollection;
        let currentTime = this.getCurrentFormattedTime();
        function checkClock(clock) {
            if (clock.time === currentTime) {
                return clock.callback();
            }
        }
        function showClock(num) {
            if (result === arrClock.length) {
                result = 0;
            }
            checkClock(arrClock[result]);
            result += num;
        }
        this.timerId = setInterval(showClock, 1000, 1);
    }

    stop() {
        clearInterval(this.timerId);
    }

    printAlarms() {
        return this.alarmCollection.forEach(el => console.log(`Будильник №${el.id} заведен на ${el.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}





// let phoneAlarm = new AlarmClock();
// phoneAlarm.addClock("22:35", () => console.log("Пора вставать"), 1);
// phoneAlarm.addClock("22:36", () => console.log("Давай, вставай уже"), 2);
// phoneAlarm.addClock("09:01", () => console.log("Иди умываться"));
// phoneAlarm.addClock("22:37", () => console.log("Пора вставать 2"), 3);
// // phoneAlarm.removeClock(2);
// // phoneAlarm.removeClock(2);
// phoneAlarm.getCurrentFormattedTime();
// phoneAlarm.start();
// phoneAlarm.printAlarms();
// console.log(phoneAlarm.alarmCollection);
// // phoneAlarm.clearAlarms();
// console.log(phoneAlarm.alarmCollection);
