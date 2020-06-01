'use strict';

function onInit() {
    createBooks();
    renderBooks();
}

function renderBooks() {
    var books = getBooks()
    var strHtmls = books.map(function (book) {
        return `
        <div class="book-entry">

            <div class="book-image"><img src="img/book${book.image}.png"></div>

            <div class="book-details">
                <h4 class="book-title">${book.title}</h4>
                <h5 class="author">${book.author}</h5>
                <h9 class="isbn">${book.isbn}</h9>
            </div>

            <div class="book-price-actions">
            <div class="price">\£${book.price}</div>
            <div><button onClick="onUpdateBook('${book.isbn}')">Update</button></div>
            <div><button onClick="onRemoveBook('${book.isbn}')">Delete</button></div>
            </div>

        </section>
    </div>
        `
    })
    document.querySelector('.books-list-container').innerHTML = strHtmls.join('')
    // document.querySelector('.btn-next').hidden = !hasNext()
}

/* <p class="short-desc">${book.desc.slice(0, 40)}... <a href="">read more</a></p> */

function onUpdateBook(isbn) {
    var newPrice = +prompt('New price');
    updateBook(isbn, newPrice);
    renderBooks();
}

function onRemoveBook(isbn) {
    removeBook(isbn);
    renderBooks()
}

function onAddBook(title, price) {
    var title = prompt('Title');
    var price = +prompt('Price');   
    addBook(title, price);
    renderBooks()
}