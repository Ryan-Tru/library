const addBtn = document.querySelector('.add-btn');
const popUp = document.querySelector('.pop-up-form');
const readBtnYes = document.querySelector('#book-status-form-yes');
const readBtnNo = document.querySelector('#book-status-form-no');
const submitForm = document.querySelector('#submit-form');
const bookContainer = document.querySelector('.books-container');
let removeButtons = document.querySelectorAll('.remove-btn');
let readButtons = document.querySelectorAll('.read-btn');
let bookCard = document.querySelectorAll('.book-card');

let readStatus;

let myLibrary = [
];

//Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//This function adds a book to the library.
//Using the Book constructor as the protoype.
function addBookToLibrary() {
    if(readStatus === undefined) return; 
    const book = Object.create(Book);
    book.title = document.getElementById('book-title-form').value;
    book.author = document.getElementById('book-author-form').value;
    book.pages = document.getElementById('book-pages-form').value;
    book.read = readStatus;
    book.inDOM = false;

    document.querySelector('form').reset();
    popUp.classList.remove('display-form');

    myLibrary.push(book);
}

//appends book to library
function appendBook() {
    for(let appendNum = 0; appendNum < myLibrary.length; appendNum++) {
        if(myLibrary[appendNum].inDOM === false) {
            myLibrary[appendNum].inDOM = true;
            let newDiv = document.createElement('div');
            let removeBtnCard = document.createElement('button');
            let readBtnCard = document.createElement('button');

            newDiv.setAttribute('bookNumber', appendNum);

            removeBtnCard.innerText = 'Remove';
            removeBtnCard.classList.add('remove-btn');
            removeBtnCard.setAttribute('removeNumber', appendNum);

            readBtnCard.innerText = 'Read Status';
            readBtnCard.classList.add('read-btn');
            readBtnCard.setAttribute('readNumber', appendNum);

            this.author = document.createElement('p');
            this.author.innerText = `Author: ${myLibrary[appendNum].author}`;
            
            this.pages = document.createElement('p');
            this.pages.innerText = `Pages: ${myLibrary[appendNum].pages}`;
        
            this.read = document.createElement('p');
            this.read.innerText = `Read: ${myLibrary[appendNum].read}`;
        
            this.title = document.createElement('p');
            this.title.innerText = `Title: ${myLibrary[appendNum].title}`;
        
            newDiv.classList.add('book-card');
            newDiv.appendChild(title);
            newDiv.appendChild(pages);
            newDiv.appendChild(author);
            newDiv.appendChild(read);
            newDiv.appendChild(readBtnCard);
            newDiv.appendChild(removeBtnCard);
        
            bookContainer.appendChild(newDiv);
        }
    }
}

//Waits for button click, then pushes form to array
document.addEventListener('DOMContentLoaded', () => {
    submitForm.addEventListener('click', (e) => {
        e.preventDefault();
        addBookToLibrary();
        appendBook();
        readStatus = undefined;
        removeButtons = document.querySelectorAll('.remove-btn');
        readButtons = document.querySelectorAll('.read-btn');
        bookCard = document.querySelectorAll('.book-card');
    });
});

function removeElement() {
}

function readElement() {
}

//opens the form pop up when clicked
addBtn.addEventListener('click', () => {
    if(popUp.classList.contains('display-form')) {
        popUp.classList.remove('display-form');
    } else {
        popUp.classList.add('display-form');
    }
});

//Changes read button to true or false
readBtnYes.addEventListener('click', () => readStatus = 'Yes');

readBtnNo.addEventListener('click', () => readStatus = 'No');