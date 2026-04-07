// class Book {
//     constructor(title, author, year) {
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }

// printInfo() {
//     console.log(`${this.title} was written by ${this.author} in ${this.year}.`);
// }
// }


// const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
// const book2 = new Book("1984", "George Orwell", 1949);
// const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// const book4 = new Book("Pride and Prejudice", "Jane Austen", 1813);

// book1.printInfo();
// book2.printInfo();
// book3.printInfo();
// book4.printInfo();

// export default Book;

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери та сеттери - валідація
    get title() { return this._title; }
    set title(value) {
        if (typeof value !== 'string' || value.length === 0) {
            throw new Error("Назва не може бути пуста");
        }
        this._title = value;
    }

    get author() { return this._author; }
    set author(value) {
        if (typeof value !== 'string') throw new Error("Автор має бути рядком");
        this._author = value;
    }

    get year() { return this._year; }
    set year(value) {
        if (typeof value !== 'number' || value > new Date().getFullYear()) {
            throw new Error("Некоректний рік видання");
        }
        this._year = value;
    }

    printInfo() {
        console.log(`"${this.title}" was written by ${this.author} in ${this.year}.`);
    }

       static findOldestBook(books) {
        return books.reduce((oldest, current) => (current.year < oldest.year ? current : oldest));
    }
}

export default Book;