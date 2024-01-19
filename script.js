console.log("I'm here!");


const cardsDisplay = document.getElementById("cards");


// const MyLibrary = [];



class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    getReadStatus() {
        return this.read ? 'read' : 'not read yet'
    }
}




// library functionality is now within a Library class
class Library {
    constructor () {
        this.MyLibrary = [];
    }

    addBook (newBook) {
        this.MyLibrary.push(newBook)
    }

    removeBook (book) {
            console.log(this.MyLibrary.indexOf(book));
            MyLibrary.splice(this.MyLibrary.indexOf(book), 1);
        
    }

    displayLibrary () {
        // first, remove whatever is being displayed 
        cardsDisplay.innerHTML = ''; 
        //loop through MyLibrary array, create new card for each Book
        this.MyLibrary.forEach((Book) => {

            let myCard = document.createElement("div");
            myCard.classList = "card";
            let cardInfo = document.createElement("p");
            cardsDisplay.appendChild(myCard);
            myCard.appendChild(cardInfo);

            let readText = "not read yet";
            if (Book.read) {readText = "read"};

            cardInfo.textContent = `${Book.title} by ${Book.author}, ${Book.pages} pages, ${readText}.`
            myCard.appendChild (cardInfo);

            let closeCard = document.createElement("button");
            closeCard.textContent = "x";

            closeCard.addEventListener("click", () => {removeBook(Book)});
            closeCard.classList = "closeCard";
            myCard.appendChild(closeCard);
        })
    }
}


// function libraryDisplay() {
//             // first, remove whatever is being displayed 
//             cardsDisplay.innerHTML = ''; 
//             //loop through MyLibrary array, create new card for each Book
//             MyLibrary.forEach((Book) => {

//                 let myCard = document.createElement("div");
//                 myCard.classList = "card";
//                 let cardInfo = document.createElement("p");
//                 cardsDisplay.appendChild(myCard);
//                 myCard.appendChild(cardInfo);

//                 let readText = "not read yet";
//                 if (Book.read) {readText = "read"};

//                 cardInfo.textContent = `${Book.title} by ${Book.author}, ${Book.pages} pages, ${readText}.`
//                 myCard.appendChild (cardInfo);

//                 let closeCard = document.createElement("button");
//                 closeCard.textContent = "x";

//                 closeCard.addEventListener("click", () => {removeBook(Book)});
//                 closeCard.classList = "closeCard";
//                 myCard.appendChild(closeCard);
//             })};

// libraryDisplay();

// function removeBook(book) {
//     console.log(MyLibrary.indexOf(book));
//     MyLibrary.splice(MyLibrary.indexOf(book), 1);
//     libraryDisplay();
// }

const library = new Library ();

const book1 = new Book ('The Hobbit', 'J.R.R Tolkien', 295, false);
const book2 = new Book ("Art of War", "Sun Tzu", 260, true);
const book3 = new Book ("Indian Horse", "Richard Wagamese", 220, true);
const book4 = new Book ("Vital Nourishment: Departing from Happiness", "Francois Jullien", 178, true)

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

library.displayLibrary();


let newBookBtn = document.querySelector("button");
let myDialog = document.querySelector("dialog");
newBookBtn.addEventListener("click", () => {myDialog.show()});

let closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", () => {
    myDialog.close()

    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
});

let submitForm = document.getElementById("submitForm");
let myForm = document.getElementById("modalForm");


// make submit button create new book object, push to array, and loop through array again
submitForm.addEventListener("click", (function(event) {
    //prevent default function of submit button.
    event.preventDefault();

    console.log((document.getElementById("title")).value)
    
        bookTitle   = (document.getElementById("title"))
        bookAuthor  = (document.getElementById("author"))
        bookPages   = (document.getElementById("pages"))
        bookRead    = (document.getElementById("read"))

        // do a form validation here (html validation did not seem to function)
    if (bookTitle.value === ''
    || bookAuthor.value === ''
    || bookPages.value === '') {
        alert ("Form is missing information!")
        return undefined; // cancel the rest of this function
    };

    let newBook = new Book (bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    MyLibrary.push(newBook);

    libraryDisplay();
    myDialog.close();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
}));


