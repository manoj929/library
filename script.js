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
    if(myLibrary){
        myLibrary.forEach(book => {
            for (const key in book) {
                console.log(book[key])
                let tr = document.createElement('tr')
                // tr.innerHTML = `<td>${book[key]}</td>`
                let td = document.createElement('td')
                td.innerHTML += `${book[key]}`
                tr.appendChild(td)
                document.querySelector('.table-data').appendChild(tr)
            }
            console.log(book.title, book.author, book.pages, book.readStatus)
        })
    }
})

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }