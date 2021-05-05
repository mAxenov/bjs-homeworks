"use strict";

//Задание 1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        return this.state = this.state * 1.5;
    }
    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100  
sherlock.fix();
console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

const picknick = new NovelBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задание 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            return this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i <= this.books.length; i++) {
            if (i === this.books.length) {
                return null;
            } else if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
    }

    giveBookByName(bookName) {
        for (let i = 0; i <= this.books.length; i++) {
            if (i === this.books.length) {
                return null;
            } else if (this.books[i].name === bookName) {
                const returnBook = this.books.slice(i, i + 1)
                return returnBook[0];
            }
        }
    }

}

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Машина времени").state);
console.log(library.findBookBy("releaseDate", 1924).name); //

console.log("Количество книг до выдачи: " + library.books.length);
console.log(library.giveBookByName("Машина времени"));
console.log("Количество книг после выдачи: " + library.books.length);

console.log(library.books);

// Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.score = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!this.score.hasOwnProperty(subject)) {
            this.score[subject] = [];
        }
        if (grade === 1 || grade === 2 || grade === 3 || grade === 4 || grade === 5) {
            return this.score[subject].push(grade);
        } else {
            try {
                throw Error(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            } catch (error) {
                return error;
            } finally {
                return this.score[subject].length;
            }
        }
    }

    getAverageBySubject(subject) {
        if (this.score.hasOwnProperty(subject) && this.score[subject].length) {
            return this.score[subject].reduce((acc, number) => (acc + number)) / this.score[subject].length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        let average = 0;
        let totalAvarage = 0;
        for (let prop in this.score) {
            average = average + this.getAverageBySubject(prop);
            if (Object.keys(this.score).length > 0) {
                totalAvarage = average / Object.keys(this.score).length;
            }
        }
        return totalAvarage;
    }
}

const log = new StudentLog('Олег Никифоров');
console.log(log.score);
console.log(log.getName()); // Олег Никифоров
console.log(log.addGrade(25, 'geometry'));
log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');
console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math'));
console.log(log.getTotalAverage());


