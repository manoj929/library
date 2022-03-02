const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const readStatus = document.querySelector("#status");
const submitButton = document.querySelector(".btn-submit");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  if (title.value != "" && author.value != "" && pages.value != "") {
    const myBook = new Book(
      title.value,
      author.value,
      pages.value,
      readStatus.value
    );
    myLibrary.push(myBook);
  } else {
    alert("please all fields");
  }
  let tr = document.createElement("tr");

  myLibrary.forEach((book, i) => {
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><button class="btn btn-primary btn-sm update">${book.readStatus}</button></td>
        <td><button class="btn btn-danger btn-sm delete">delete</button></td>
    `;
    document.querySelector(".book-list").appendChild(tr);
    // console.log(book.title, book.author, book.pages, book.readStatus)
  });

  title.value = "";
  author.value = "";
  pages.value = "";
  // readStatus.value = '';
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  addBookToLibrary();
});

function deleteBook(element) {
  if (element.classList.contains("delete")) {
    element.parentElement.parentElement.remove();
  }
}

Book.prototype.updateStatus = function (element) {
  if (element.classList.contains("update")) {
    // console.log('changed')
    element.textContent == "Not Read"
      ? (element.textContent = "Read")
      : (element.textContent = "Not Read");
  }
};

document.querySelector(".book-list").addEventListener("click", (e) => {
  console.log(e.target);
  deleteBook(e.target);
  Book.prototype.updateStatus(e.target);
});
