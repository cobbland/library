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

// const centauriWomb = new Book('Centauri Womb', 'Jacob Densford', 376, 'to read');

// addBookToLibrary('Centauri Womb', 'Jacob Densford', 376, 'to read', myLibrary);