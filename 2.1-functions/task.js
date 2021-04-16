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
    let sumData = data;
    return sumData;
}

let score = getAverageScore({ algebra: [2, 4, 5, 2, 3, 4], geometry: [2, 4, 5], russian: [3, 3, 4, 5], physics: [5, 5], music: [2, 2, 6], english: [4, 4, 3], poetry: [5, 3, 4], chemistry: [2], french: [4, 4] });
// let score = getAverageScore({});

function getAverageMark(marks) {
    let avarageMark = {};
    let sum = 0;
    console.log(marks);
    for (let prop in marks) {
        let value = marks[prop];
        let avarageValue = value.reduce((a, b) => (a + b)) / value.length;
        avarageMark[prop] = avarageValue;
        sum = sum + avarageValue;
    }
    console.log(Object.keys(marks).length);
    if (Object.keys(marks).length > 0) {
        avarageMark.avarage = sum / Object.keys(avarageMark).length;
    } else {

        avarageMark.avarage = 0;
    }

    console.log(avarageMark);
    return avarageMark;
}
getAverageMark(score);


console.log(`Задание 3`);

function getPersonData(secretData) {
    return Object.values(secretData);
}

function getDecodedValue(secret) {
    let value = {};
    function name(valueSecret, valueName) {
        if (secret[valueSecret] === 0) {
            value[valueName] = 'Родриго';
        } else {
            value[valueName] = 'Эмильо';
        }
    }
    name(0, 'firstName');
    name(1, 'lastName');
    return value;
}
console.log(getDecodedValue(getPersonData({ aaa: 1, bbb: 1 })));