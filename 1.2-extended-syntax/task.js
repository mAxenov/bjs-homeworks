"use strict";
function getResult(a, b, c) {
    let d = Math.pow(b, 2) - (4 * a * c);
    let answer = [];
    console.log(d);
    if (d === 0) {
        let x = -b / (2 * a);
        answer = [x];
    } else if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        answer = [x1, x2];
    }
    return answer;
}

function getAverageMark(marks) {
    let averageMark = 0;
    let number = 0;
    if (marks.length === 0) {
        return averageMark;
    }
    marks.splice(5);
    for (let i = 0; i < marks.length; i++) {
        number += marks[i];
    }
    averageMark = number / marks.length;
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    // let today = new Date().getFullYear();
    // let year = dateOfBirthday.getFullYear();
    let result = (new Date().getFullYear() - dateOfBirthday.getFullYear()) > 18 ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    return result;
}