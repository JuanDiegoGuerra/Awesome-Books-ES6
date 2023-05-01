// importing class "Book" from another file
import Book from './modules/book_class.js';
import Library, { displayBook } from './modules/library_class.js';
import { DateTime } from './modules/luxon.min.js';
import {
  listBtn, formContainer, bookList, contactInfo, addNewBtn, contactBtn,
} from './modules/navbar_consts.js';

// event listener when clicking the "add" button
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('book-title').value;
  // Capitalize first letter of title value
  const titleUC = title.charAt(0).toUpperCase() + title.slice(1);
  const author = document.getElementById('book-author').value;
  const arrAuthor = author.split(' ');
  // Capitalize first letter of each word of author value
  for (let i = 0; i < arrAuthor.length; i += 1) {
    arrAuthor[i] = arrAuthor[i].charAt(0).toUpperCase() + arrAuthor[i].slice(1);
  }
  const authorUC = arrAuthor.join(' ');
  if ((title && author) !== '') {
    const book = new Book(titleUC, authorUC);
    const library = new Library(book);
    library.addBook();
    form.reset();
    displayBook();
  }
});

listBtn.addEventListener('click', () => {
  bookList.style.display = 'block';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
  displayBook();
});

window.addEventListener('load', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  bookList.style.display = 'none';
  formContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});

setInterval(() => {
  document.getElementById('date').textContent = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);
