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

let newBook = new Book('Harry Potter', 'J.K. Rowling', 500, true);
let newBook2 = new Book('Lord of the Rings', 'J.R.R Tolkien', 1000);

myLibrary.push(newBook);
myLibrary.push(newBook2);

function newCard() {
	let container = document.querySelector('.cards');
	let child = document.createElement('div');
	child.classList.add('book-card');
	container.appendChild(child);

	const child2 = document.createElement('div');
	child2.classList.add("book-info");
	child.appendChild(child2);

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
}

function displayBooks() {
	
}

displayBooks();
console.log('Si vale');
