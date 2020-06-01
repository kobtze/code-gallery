'use strict';

const KEY = 'books';
var gBooks;
var gWriters = ['Ernest Hemingway', 'Virginia Woolf', 'Oscar Wilde', 'Lewis Carroll', 'George Orwell']

const PAGE_SIZE = 10;
var gPageIdx = 0;

function updateBook(isbn, newPrice) {
    var book = getBookByIsbn(isbn);
    book.price = newPrice;
    _saveBooksToStorage();
}

function getBookByIsbn(isbn) {
    var book = gBooks.find(function(book){
        return isbn === book.isbn
    })
    return book
}

function addBook(title, price) {
    var book = _createBook(title, price)
    gBooks.unshift(book)
    _saveBooksToStorage();
}

function removeBook(isbn) {
    var bookIdx = gBooks.findIndex(function (book) {
        return isbn === book.isbn
    })
    gBooks.splice(bookIdx, 1)
    _saveBooksToStorage();
}

function getBooks() {
    return gBooks
}

function createBooks() {
    var books = loadFromStorage(KEY)
    if (!books || !books.length) {
        books = []
        for (let i = 0; i < 20; i++) {
            books.push(_createBook())
        }
    }
    gBooks = books;
    _saveBooksToStorage();
}

function _createBook(title, price) {
    var author = gWriters[getRandomIntInclusive(0, gWriters.length - 1)];
    if (!title) title = generateName();
    if (!price) price = getRandomIntInclusive(200, 1000) / 20
    return {
        isbn: makeIsbn(),
        author: author,
        title: title,
        price: price,
        image: getRandomIntInclusive(1, 5),
        desc: makeLorem()
    }
}

function _saveBooksToStorage() {
    saveToStorage(KEY, gBooks)
}