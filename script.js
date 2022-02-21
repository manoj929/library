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

const myBook = new Book(title.value, author.value, pages.value, readStatus.value)

function addBookToLibrary(myBook) {
    myLibrary.push(myBook)
}



submitButton.addEventListener('click', function() {
    addBookToLibrary(myBook)
    let tr = document.createElement('tr')
    if(myLibrary){
        myLibrary.forEach(book => {
            for (const key in book) {
                console.log(book[key])

                tr.innerHTML += `<td>${book[key]}</td>`
            }
            document.querySelector('.table-data').appendChild(tr)
            console.log(book.title, book.author, book.pages, book.readStatus)
        })
    }
})