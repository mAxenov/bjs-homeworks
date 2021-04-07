"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (Number.isInteger(+percent)) {
        console.log(percent);
    } else {
        return (`Параметр процентая ставка содержит неправильное значение ${percent}`);
    }

    if (Number.isInteger(+contribution)) {
        console.log(contribution);
    } else {
        return (`Параметр сумма первоначального взноса содержит неправильное значение ${contribution}`);
    }

    if (Number.isInteger(+amount)) {
        console.log(amount);
    } else {
        return (`Параметр сумма кредита содержит неправильное значение ${amount}`);
    }

    if (Number.isInteger(+date)) {
        console.log(date);
    } else {
        return (`Параметр срок кредита содержит неправильное значение ${date}`);
    }

    let dateYear = date.getFullYear() - new Date().getFullYear();
    let month;

    if (dateYear === 0) {
        month = Math.abs(date.getMonth() - new Date().getMonth());
    } else {
        month = Math.abs(date.getMonth() - new Date().getMonth()) + (12 * dateYear);
    }

    let bodyCredit = +amount - +contribution;
    let percentMonth = (+percent / 12) / 100;
    let amout = bodyCredit * (percentMonth + percentMonth / (((1 + percentMonth) ** month) - 1));
    let totalAmount = amout * month;

    return totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting;
    if (name) {
        greeting = `Привет, мир! Меня зовут ${name}.`;
    } else {
        greeting = `Привет, мир! Меня зовут Аноним.`;
    }
    return greeting;
}