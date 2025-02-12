const editButton = '<svg class="edit-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>'
const deleteButton = '<svg class="delete-book" height="2em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'

const container = document.querySelector('.container');

const myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

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


addBookToLibrary('Centauri Womb', 'Jacob Densford', 376, 'am reading');
addBookToLibrary('The Swallow and the Kitty Cat', 'Sai Densford', 32, 'have read');
addBookToLibrary('Stimsticks and Asteroid Wars', 'Jacob Densford', 264, 'to read');
displayBooks()