"use strict";
//Задание 1

function parseCount(number) {
    let parseNumber = parseInt(number, 10);
    if (isNaN(parseNumber)) {
        throw "Невалидное значение";
    }
    return parseInt(parseNumber);
}
function validateCount(number) {
    try {
        let num = parseCount(number);
        return num;
    } catch (err) {
        return err;
    }
}

//Задание 2

class Trinagle {
    constructor(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        if (this.sideA + this.sideB < this.sideC) {
            throw "Треугольник с такими сторонами не существует";
        } else if (this.sideA + this.sideC < this.sideB) {
            throw "Треугольник с такими сторонами не существует";
        } else if (this.sideB + this.sideC < this.sideA) {
            throw "Треугольник с такими сторонами не существует";
        }
    }

    getPerimeter() {
        const perimeter = this.sideA + this.sideB + this.sideC;
        return perimeter;
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC));
        return area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        const newtriangle = new Trinagle(a, b, c);
        return newtriangle;
    } catch (e) {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует",
        }
    }
}