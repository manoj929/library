// const title = document.querySelector('#title').value;
// const author = document.querySelector('#author').value;
// const pages = document.querySelector('#pages').value;
// const readStatus = document.querySelector('#status').value;
// const submitButton = document.querySelector('.btn-submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const readStatus = document.querySelector('#status');
const submitButton = document.querySelector('.btn-submit');

let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

function addBookToLibrary() {
    if (title.value != '' && author.value != '' && pages.value != '', readStatus.value != '') {
        const myBook = new Book(title.value, author.value, pages.value, readStatus.value)
        myLibrary.push(myBook)
    } else {
        alert('please all fields')
    }
    let tr = document.createElement('tr')

    myLibrary.forEach((book, i) => {
        myLibrary[i] = Book
        for (const key in book) {
            console.log(book[key])
            tr.innerHTML += `<td>${book[key]}</td>`
        }
        document.querySelector('.table-data').appendChild(tr)
        // console.log(book.title, book.author, book.pages, book.readStatus)
    })
    
    title.value = '';
    author.value = '';
    pages.value = '';
    readStatus.value = '';
}

submitButton.addEventListener('click', function (e) {
    addBookToLibrary()
    e.preventDefault();
})