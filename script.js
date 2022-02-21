const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const readStatus = document.querySelector('#status').value;
const submitButton = document.querySelector('.btn-submit');

let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary(myBook) {
    myLibrary.push(myBook)
}

submitButton.addEventListener('click', function () {
    if(title != '' && author != '' && pages != '', readStatus != '') {
        const myBook = new Book(title, author, pages, readStatus)
        addBookToLibrary(myBook)
    } 
    let tr = document.createElement('tr')
    let td = document.createElement('td')

    myLibrary.forEach((book, i) => {
        myLibrary[i] = Book
        for (const key in book) {
            console.log(book[key])
            tr.innerHTML += `<td>${book[key]}</td>`
        }
        document.querySelector('.table-data').appendChild(tr)
        console.log(book.title, book.author, book.pages, book.readStatus)
    })
})