// Script file of Library project

let myLibrary = [];

function Book(title, author, pages, read = false) {
	this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function() {

}

Book.prototype.showInfo = function() {
	return `Author:\t${this.author}\nPages:\t${this.pages}\nRead:\t${this.read}`;
}

let newBook = new Book('Harry Potter', 'J.K. Rowling', 500, true);
let newBook2 = new Book('Lord of the Rings', 'J.R.R Tolkien', 1000);

myLibrary.push(newBook);
myLibrary.push(newBook2);

function newCard(book) {
	// Create new card
	let container = document.querySelector('.cards');
	let child = document.createElement('div');
	child.classList.add('book-card');
	container.appendChild(child);

	// Create all child elements of a card
	const child2 = document.createElement('div');
	child2.classList.add("book-info");
	child.appendChild(child2);

	const child21 = document.createElement('div');
	child21.classList.add("book-info-title");
	child2.appendChild(child21);

	const child22 = document.createElement('div');
	child22.classList.add("book-info-li");
	child2.appendChild(child22);

	const child3 = document.createElement('div');
	child3.classList.add("book-options");
	child.appendChild(child3);

	const child4 = document.createElement('button');
	child4.id = 'mod-book-btn';
	child4.textContent = 'Modify';
	child3.appendChild(child4);

	const child5 = document.createElement('button');
	child5.id = 'del-book-btn';
	child5.textContent = 'Delete'
	child3.appendChild(child5);

	// Set information about the Book
	child21.textContent = book.title;
	child22.textContent = book.showInfo();
}

function displayBooks() {
	myLibrary.forEach(item => {
		newCard(item);
	});
}

displayBooks();
