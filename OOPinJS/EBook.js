// import Book from './Book.js';

// class EBook extends Book {
//     constructor(title, author, year, fileFormat) {
//         super(title, author, year);
//         this.fileFormat = fileFormat;
//     }

//     printInfo() {
//         console.log(`"${this.title}" was written by ${this.author} in ${this.year}. Format: ${this.fileFormat}.`);
//     }
// }

// const ebook1 = new EBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "EPUB");

// ebook1.printInfo();

// export default EBook;

import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) {
        const validFormats = ['PDF', 'EPUB', 'MOBI'];
        if (!validFormats.includes(value.toUpperCase())) {
            throw new Error("Непідтримуваний формат файлу");
        }
        this._fileFormat = value;
    }

    printInfo() {
        console.log(`"${this.title}" was written by ${this.author} in ${this.year}. Format: ${this.fileFormat}.`);
    }

    // Статичний метод для створення EBook з Book
    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

export default EBook;