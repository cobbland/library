# Library

A The Odin Project project. The goal is to make a library webapp for saving books and their data, and modifying same.

## Todo

- [x] Add general layout html
- [x] Add general css styles
- [x] Add `myLibrary` array
- [x] Add `Book()` constructor
- [x] Add `addBookToLibrary()` function
    - "can take some arguments, create a book from those arguments, and store the new book object into an array"
- [x] Add `displayBooks()` function
    - "loops through the array and displays each book on the page"
- [x] Add "Add Book" button and related form display—should pass data to `addBookToLibrary()`
- [x] Add a button on each displayed book to remove the book (from the page and from `myLibrary`)
    - "need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array"
- [x] Add a button on each displayed book to change its "read" status
    - "will want to create `Book` prototype function that toggles a book instance’s read status"