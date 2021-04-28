"use strict";
//Задание 1

function parseCount(number) {
    let parseNumber = parseInt(number, 10);
    if (isNaN(parseNumber)) {
        throw Error("Невалидное значение");
    }
    return parseNumber;
}
function validateCount(number) {
    try {
        return parseCount(number);
    } catch (err) {
        return err;
    }
}

//Задание 2

class Triangle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if (a + b < c || a + c < b || b + c < a) {
            throw Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getArea: (e) => Error("Ошибка! Треугольник не существует"),
            getPerimeter: (e) => Error("Ошибка! Треугольник не существует"),
        };

    }
}

