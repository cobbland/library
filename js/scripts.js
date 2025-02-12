const editButton = '<svg class="edit-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>edit</title><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" /></svg>'
const deleteButton = '<svg class="delete-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'

const container = document.querySelector('.container');
const addBookButton = document.querySelector('.add-book')

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

function addBook() {
    console.log('Add book button press!');
    // add new book to library
}

function deleteBook() {
    console.log('Delete book press!')
    // delete book from library
}



addBookButton.addEventListener('click', (button) => {
    addBook()
    // make new book
});

container.addEventListener('click', (button) => {
    // listen for buttons on books to be pressed, do something
});


addBookToLibrary('Centauri Womb', 'Jacob Densford', 376, 'am reading');
addBookToLibrary('The Swallow and the Kitty Cat', 'Sai Densford', 32, 'have read');
addBookToLibrary('Stimsticks and Asteroid Wars', 'Jacob Densford', 264, 'to read');
displayBooks()