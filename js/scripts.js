const editButton = '<svg class="edit-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>edit</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
const deleteButton = '<svg class="delete-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'

const container = document.querySelector('.container');
const addBookButton = document.querySelector('.add-book');
const addBookDialog = document.querySelector('.add-book-dialog');
const addBookForm = document.querySelector('.add-book-form');

const myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

Book.prototype.editBook = function() {
    // edit book's read status
};

function addBookToLibrary(title, author, pages, status, array = myLibrary) {
  // take params, create a book then store it in the array
  array.push(new Book(title, author, pages, status));
}

function displayBooks(libraryArray = myLibrary) {
    // take an array of books, display them on the page
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    for (let book in libraryArray) {
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement('div');
        const bookAuthor = document.createElement('div');
        const bookPages = document.createElement('div');
        const readStatus = document.createElement('div');
        const bookButtons = document.createElement('div');

        bookDiv.setAttribute('tabindex', '0');
        bookDiv.setAttribute('lib-index', book);

        bookDiv.classList.add('book');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('author-div');
        bookPages.classList.add('page-div');
        readStatus.classList.add('read-status');
        bookButtons.classList.add('book-buttons');
        bookButtons.innerHTML = editButton + deleteButton;

        bookTitle.innerText = libraryArray[book].title;
        bookAuthor.innerText = 'by ' + libraryArray[book].author;
        bookPages.innerText = libraryArray[book].pages + ' pages';
        readStatus.innerText = libraryArray[book].status;

        switch (libraryArray[book].status) {
            case 'to read':
                bookDiv.classList.add('to-read');
                break;
            case 'am reading':
                bookDiv.classList.add('am-reading');
                break;
            case 'have read':
                bookDiv.classList.add('have-read');
                break;
            default:
                break;
        }
        
        container.appendChild(bookDiv);
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatus);
        bookDiv.appendChild(bookButtons);
    } 
}

function deleteBook() {
    console.log('Delete book press!')
    // delete book from library
}

addBookButton.addEventListener('click', (button) => {
    addBookDialog.showModal();
    // make new book
});

addBookDialog.addEventListener('click', button => {
    if (button.target.getAttribute('value') === 'cancel') {
        addBookDialog.close();
        addBookForm.reset();
    } 
})

addBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = addBookForm['title-input'].value;
    const author = addBookForm['author-input'].value;
    const pages = addBookForm['page-count-input'].value;
    const status = addBookForm['reading-status'].value;
    addBookToLibrary(title, author, pages, status);
    displayBooks();
    addBookDialog.close();
    addBookForm.reset();
})

container.addEventListener('click', (button) => {
    // listen for buttons on books to be pressed, do something
});


// addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, 'have read');
// addBookToLibrary('Moby Dick', 'Herman Melville', 635, 'to read');
// addBookToLibrary('Frankenstein', 'Mary Shelley', 280, 'am reading');
// addBookToLibrary('The Adventures of Sherlock Holmes', 'Arthur Conan Doyle', 307, 'have read');
// addBookToLibrary('Dracula', 'Bram Stoker', 418, 'to read');
// addBookToLibrary('The Picture of Dorian Gray', 'Oscar Wilde', 254, 'am reading');
// addBookToLibrary('Alice\'s Adventures in Wonderland', 'Lewis Carroll', 200, 'have read');
// addBookToLibrary('The Scarlet Letter', 'Nathaniel Hawthorne', 238, 'to read');
// addBookToLibrary('The War of the Worlds', 'H.G. Wells', 192, 'am reading');
// addBookToLibrary('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'have read');
// addBookToLibrary('Centauri Womb', 'Jacob Densford', 376, 'have read');
// addBookToLibrary('The Swallow and the Kitty Cat', 'Sai Densford', 32, 'have read');
// addBookToLibrary('Stimsticks and Asteroid Wars', 'Jacob Densford', 264, 'to read');

// displayBooks()