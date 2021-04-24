"use strict";

console.log(`Задание 1`);

function getSolutions(a, b, c) {
    let d = (b ** 2) - (4 * a * c);

    if (d < 0) {
        return { D: d, roots: [] };
    } else if (d === 0) {
        let x1 = -b / (2 * a);
        return { D: d, roots: [x1] };
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log(x1, x2);
        return { D: d, roots: [x1, x2] };
    }

}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уровнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage(2, 4, 2);

console.log(`Задание 2`);

function getAverageScore(data) {
    let avarageMark = {};
    for (let prop in data) {
        let avarageValue = data[prop].reduce((acc, number) => (acc + number)) / data[prop].length;
        avarageMark[prop] = avarageValue;
    } return avarageMark;
};

function getAverageMark(marks) {
    let answerMarks = marks;
    let sum = 0;
    for (let prop in marks) {
        sum = (marks[prop] + sum);
    }
    if (Object.keys(marks).length > 0) {
        answerMarks.avarage = sum / Object.keys(marks).length;
    } else {
        answerMarks.avarage = 0;
    }

    console.log(answerMarks);
    return answerMarks;
}

getAverageMark(getAverageScore({ algebra: [2, 4, 5, 2, 3, 4], geometry: [2, 4, 5], russian: [3, 3, 4, 5], physics: [5, 5], music: [2, 2, 6], english: [4, 4, 3], poetry: [5, 3, 4], chemistry: [2], french: [4, 4] }));


console.log(`Задание 3`);

function getPersonData(secretData) {
    let personData = Object.values(secretData);
    console.log(personData);
    return personData;
}

function getDecodedValue(secret) {
    let value = {};
    //функция name создана для того, чтобы не писать один и тот же код дважды. И легко можно расширить, например для отчества. 
    // function name(valueSecret, valueName) {
    //     if (secret[valueSecret] === 0) {
    //         value[valueName] = 'Родриго';
    //     } else {
    //         value[valueName] = 'Эмильо';
    //     }
    // }
    // name(0, 'firstName');
    // name(1, 'lastName');

    if (secret[0] === 0) {
        value.firstName = 'Родриго';
    } else {
        value.firstName = 'Эмильо';
    }

    if (secret[1] === 0) {
        value.lastName = 'Родриго';
    } else {
        value.lastName = 'Эмильо';
    }
    return value;
}
console.log(getDecodedValue(getPersonData({ aaa: 0, bbb: 1 })));