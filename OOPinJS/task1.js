import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

const ebook1 = new EBook("The Hobbit", "J.R.R. Tolkien", 1937, "PDF");

book1.printInfo();
ebook1.printInfo();

const allBooks = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(allBooks);
console.log("--- Найдавніша книга ---");
oldestBook.printInfo();

const newEbook = EBook.fromBook(book2, "EPUB");
console.log("--- Створена EBook з Book книга ---");
newEbook.printInfo();