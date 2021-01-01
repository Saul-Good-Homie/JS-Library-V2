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

const theHobbit = new Book("The Hobbit", "J.R. Tolkein", 498);

theHobbit.info();
