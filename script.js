// Script file of Library project

let myLibrary = [];

function Book(title = null, author = null, pages = null, read = false) {
	this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.addBookToLibrary = function(newBook) {

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

	// Delete button action
	child5.addEventListener('click', function() {
		container.removeChild(child);
	});
}

function insertInfoCard() {
	// Information-display div
	const content = document.querySelector('.content')
	const container = document.createElement('div');
	container.id = 'insert-info-card';
	content.appendChild(container);

	// Header of info-display
	const header = document.createElement('div')
	header.id = 'header-info-card';
	header.textContent = 'Insert book information';
	container.appendChild(header);

	// Info fields flex container
	const infoFields = document.createElement('div');
	infoFields.id = 'info-fields';
	container.appendChild(infoFields);

	//Title field flex container
	const infoFieldTitle = document.createElement('div');
	infoFieldTitle.id = 'infoFieldTitle';
	infoFields.appendChild(infoFieldTitle);

	// Title field text
	const titleFieldText = document.createElement('div');
	titleFieldText.textContent = 'Title:';
	infoFieldTitle.appendChild(titleFieldText);

	// Title field input
	const titleFieldInput = document.createElement('input');
	titleFieldInput.id = 'title-field-input';
	infoFieldTitle.appendChild(titleFieldInput);

	//Author field flex container
	const infoFieldAuthor = document.createElement('div');
	infoFieldAuthor.id = 'infoFieldAuthor';
	infoFields.appendChild(infoFieldAuthor);

	// Author field text
	const authorFieldText = document.createElement('div');
	authorFieldText.textContent = 'Author:';
	infoFieldAuthor.appendChild(authorFieldText);

	// Author field input
	const authorFieldInput = document.createElement('input');
	authorFieldInput.id = 'authorFieldInput';
	infoFieldAuthor.appendChild(authorFieldInput);

	// Pages field flex container
	const infoFieldPages = document.createElement('div');
	infoFieldPages.id = 'infoFieldPages';
	infoFields.appendChild(infoFieldPages);

	// Pages field text
	const pagesFieldText = document.createElement('div');
	pagesFieldText.textContent = 'Pages:';
	infoFieldPages.appendChild(pagesFieldText);

	// Pages field input
	const pagesFieldInput = document.createElement('input');
	pagesFieldInput.id = 'pagesFieldInput';
	infoFieldPages.appendChild(pagesFieldInput);

	// Read field flex container
	const infoFieldRead = document.createElement('div');
	infoFieldRead.id = 'infoFieldRead';
	infoFields.appendChild(infoFieldRead);

	// Read field text
	const readFieldText = document.createElement('div');
	readFieldText.textContent = 'Read:';
	infoFieldRead.appendChild(readFieldText);

	// Read field input
	const readFieldInput = document.createElement('input');
	readFieldInput.id = 'readFieldInput';
	infoFieldRead.appendChild(readFieldInput);

	// Insert book button
	const insertBook = document.createElement('button');
	insertBook.id = 'insert-book-btn';
	insertBook.textContent = 'Insert book';
	infoFields.appendChild(insertBook);

	insertBook.addEventListener('click', function() {
		let newBook = new Book(
			titleFieldInput.value,
			authorFieldInput.value,
			pagesFieldInput.value,
			readFieldInput.value
			);
		myLibrary.push(newBook);
		newCard(myLibrary[myLibrary.length-1]);
	});
}

// Display insert-info cards
const btn = document.getElementById('add-book-btn');
btn.addEventListener('click', function() {
	insertInfoCard();
});

function displayBooks() {
	myLibrary.forEach(item => {
		newCard(item);
	});
}

displayBooks();
