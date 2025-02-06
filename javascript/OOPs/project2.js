// // Library Management System

// // project Overview
// // We need a Library Management System where users (students, teachers) can borrow, return, and search for books. The system should maintain book records, user details, and borrowing history.

// class librarian{
//   static id = 1;
//   books = [];
//   librarianName;
//   age;
//   constructor(librarianName, age){
//     this.librarianName = librarianName;
//     this.age = age;
//   }

//   addBook(name,description){
//     let book = {
//       id:librarian.id++,
//       name:name,
//       description:description
//     }
//     this.books.push(book);
//     console.log(`book ${name} addes to Library`)
//   }

// removeBook(id) {
//   this.books = this.books.filter((item) => item.id !== id);
//   console.log(`Book with ID ${id} removed`);
// }

//   ListAllBooks(){
//     this.books.map((item)=> console.log(`${item.id} : ${item.name} ---> ${item.description}`))
//   }
// }

// class User extends librarian {
  
  
// }




// let lib = new librarian("bose",22)

// lib.addBook('toc',"theory of computation")
// lib.addBook('os',"operating system");
// lib.addBook('os',"operating system");
// lib.removeBook(1)
// lib.ListAllBooks()


//----------------------------------------------------------------------


class Book {
  constructor(title, author, ISBN, availableCopies){
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.availableCopies = availableCopies;
  }
}

class User {
  constructor(name, UserID){
    this.name = name;
    this.UserID = UserID;
    this.borrowedBooks = [];
  }

  canBorrow(){
    return this.borrowedBooks.length < 3;
  }

  borrowedBooks(book){
    if(this.canBorrow() && book.availableCopies > 0){
      this.borrowedBooks.push({
        book,
        dueDate:new Date(Date.now()+ 14*24*60*60*1000),
      });
      book.availableCopies--;
      
       console.log(`${this.name} borrowed "${book.title}". Due date: ${this.borrowedBooks[this.borrowedBooks.length - 1].dueDate}`);
        } else {
      console.log(this.canBorrow() ? `${book.title} is not available`:`Borrow limit reached`)
    }
  }


  returnBook(bookISBN){
    const index = this.borrowedBooks.findIndex(entry => entry.book.ISBN ===bookISBN)
    if(index!==-1){
      let returnedBook = this.borrowedBooks.splice(index, 1)[0].book;
            returnedBook.availableCopies++;
            console.log(`${this.name} returned "${returnedBook.title}".`);
        } else {
            console.log(`Book not found in ${this.name}'s borrowed list.`);
        }
  }
viewBorrowingHistory() {
        if (this.borrowedBooks.length === 0) {
            console.log(`${this.name} has no borrowed books.`);
        } else {
            console.log(`Borrowing history for ${this.name}:`);
            this.borrowedBooks.forEach(entry => {
                console.log(`- ${entry.book.title} (Due: ${entry.dueDate})`);
            });
        }
    }

}


class Student extends User {
  constructor(name,StudentId){
    super(name,StudentId)
    this.StudentId = StudentId;
  }
}



class Teacher extends User {
  constructor(name,teacherId){
    super(name,teacherId)
    this.teacherId = teacherId;
  }
}


class Library {
    constructor() {
        this.books = [];
        this.users = [];
    }

 // Add a book to the library
    addBook(title, author, ISBN, availableCopies) {
        const book = new Book(title, author, ISBN, availableCopies);
        this.books.push(book);
        console.log(`Book "${title}" added to the library.`);
    }

removeBook(ISBN) {
        const index = this.books.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            console.log(`Book "${this.books[index].title}" removed from the library.`);
            this.books.splice(index, 1);
        } else {
            console.log(`Book with ISBN ${ISBN} not found.`);
        }
    }

  searchBook(query) {
        const results = this.books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.ISBN.includes(query)
        );

        if (results.length > 0) {
            console.log(`Search results for "${query}":`);
            results.forEach(book => console.log(`- ${book.title} by ${book.author} (ISBN: ${book.ISBN}, Copies: ${book.availableCopies})`));
        } else {
            console.log(`No books found matching "${query}".`);
        }
    }
 addUser(user) {
        this.users.push(user);
        console.log(`User "${user.name}" added to the library.`);
    }

    // Borrow a book
    borrowBook(userID, bookISBN) {
        const user = this.users.find(user => user.userID === userID);
        const book = this.books.find(book => book.ISBN === bookISBN);

        if (user && book) {
            user.borrowBook(book);
        } else {
            console.log("User or Book not found.");
        }
    }

returnBook(userID, bookISBN) {
        const user = this.users.find(user => user.userID === userID);
        if (user) {
            user.returnBook(bookISBN);
        } else {
            console.log("User not found.");
        }
    }

    // Display all books
    displayBooks() {
        if (this.books.length === 0) {
            console.log("No books available in the library.");
        } else {
            console.log("Available books:");
            this.books.forEach(book => {
                console.log(`- ${book.title} by ${book.author} (ISBN: ${book.ISBN}, Copies: ${book.availableCopies})`);
            });
        }
    }
}





const myLibrary = new Library();

// Adding Books
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "12345", 3);
myLibrary.addBook("1984", "George Orwell", "67890", 2);
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "54321", 1);


const student1 = new Student("Alice", "S001");
const teacher1 = new Teacher("Mr. Smith", "T001");

myLibrary.addUser(student1);
myLibrary.addUser(teacher1);

// Display Books
myLibrary.displayBooks();
myLibrary.searchBook("1984");

// Borrowing books
myLibrary.borrowBook("S001", "12345"); // Alice borrows "The Great Gatsby"
myLibrary.borrowBook("S001", "67890"); // Alice borrows "1984"
myLibrary.borrowBook("S001", "54321"); // Alice borrows "To Kill a Mockingbird"

// Trying to exceed borrowing limit
myLibrary.borrowBook("S001", "67890"); // Should not allow

// Returning a book
myLibrary.returnBook("S001", "12345");

// Viewing borrowing history
student1.viewBorrowingHistory();

// Display books after transactions
myLibrary.displayBooks();













