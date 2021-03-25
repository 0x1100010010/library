'use strict';

const myLibrary = [
  {
    title: 'Book-1', 
    author: 'Author-1',
    pages: 300,
    status: true
  },
  {
    title: 'Book-2', 
    author: 'Author-2',
    pages: 400,
    status: false
  },
  {
    title: 'Book-3', 
    author: 'Author-3',
    pages: 500,
    status: true
  }
]

function Book(title, author, pages, status) {
  this.title =  title
  this.author = author
  this.pages = pages
  this.status = status
}

function addBookToLibrary() {
  
}

function renderLibrary () {
  let entries = "";
  myLibrary.forEach( 
    record => { 
      entries += `<tr><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.title}</div></td>`
      entries += `<td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.author}</div></td>`
      entries += `<td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.pages}</div></td>`
      entries += `<td class="px-6 py-4 whitespace-nowrap text-center"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${record.status}</span></td>`
      entries += `<td class="px-6 py-4 whitespace-nowrap text-center"><a href="#" class="text-indigo-600 hover:text-indigo-900">Drop</a></td></tr>`
    }
  );
  document.getElementById('library-entries').innerHTML = entries;
}

function addRecord(e) {
  e.preventDefault();
  const formElements = e.target.elements;
  console.log(formElements)
  const newBook = new Book(
    formElements.title.value,
    formElements.author.value,
    formElements.pages.value,
    formElements.status.checked,
  );
  console.log(newBook)
  myLibrary.push(newBook);
  console.log(myLibrary)
  renderLibrary();
}


console.log(document.getElementById('newRecordForm'))
document.getElementById('newRecordForm').addEventListener('submit', addRecord);

renderLibrary();