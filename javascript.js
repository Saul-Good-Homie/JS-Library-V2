let myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;

  this.read = false;

  this.info = function () {
    console.log(
      this.name +
        " by " +
        this.author +
        ", " +
        this.pages +
        " pages " +
        this.read
    );
  };
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

const theHobbit = new Book("The Hobbit", "J.R. Tolkein", 498);
const antiracist = new Book("How to be an Antiracist", "Ibram X. Kendi", 280);

theHobbit.info();
antiracist.info();

addBookToLibrary(theHobbit);
addBookToLibrary(antiracist);

console.log(myLibrary);
