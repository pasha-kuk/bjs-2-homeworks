class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(state) {
      if (state < 0) {
        this._state = 0;
      } else if (state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
  
    get state() {
      return this._state;
    }
  
    fix() {
      this.state *= 1.5;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, type = "magazine") {
      super(name, releaseDate, pagesCount);
      this.type = type;
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, type = "book") {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = type;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type = "novel") {
      super(author, name, releaseDate, pagesCount);
      this.type = type;
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type = "fantastic") {
      super(author, name, releaseDate, pagesCount);
      this.type = type;
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, type = "detective") {
      super(author, name, releaseDate, pagesCount);
      this.type = type;
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
      this.state = 100;
    }
  
    addBook(book) {
      if (this.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      let result = null;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i][type] === value) {
          result = this.books[i];
        }
      }
      return result;
    }
  
    giveBookByName(bookName) {
      let result;
      let deleteBook = null;
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          deleteBook = i;
        }
      }
      if (deleteBook != null) {
        result = this.books.splice(deleteBook, 1);
      } else {
        return deleteBook;
      }
      return result[0];
    }
  }