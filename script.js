console.log("I'm here!");


const cardsDisplay = document.getElementById("cards");


const myLibrary = [];



// need to change object to contain only book info and be stored in array.

// write new function to create cards based on the above array. 


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        // this.index = 
    }
}

const book1 = new Book ('The Hobbit', 'J.R.R Tolkien', 295, true)
const book2 = new Book ("Art of War", "Sun Tzu", 260, true)


function addBooktoLibrary(newBook) {
    myLibrary.push(newBook)
};

addBooktoLibrary(book1);
addBooktoLibrary(book2);


function libraryDisplay() {
            // first, remove whatever is being displayed 
            cardsDisplay.innerHTML = ''; 



            //loop through myLibrary array, create new card for each Book
            myLibrary.forEach((Book) => {
                console.log(Book);

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

                // to remove book properly, need to access book object index somehow...
                closeCard.addEventListener("click", () => {myCard.remove()});
                closeCard.classList = "closeCard";
                myCard.appendChild(closeCard);
            })};

libraryDisplay();

// function removeBook() {

// }




let newBookBtn = document.querySelector("button");
let myDialog = document.querySelector("dialog");
newBookBtn.addEventListener("click", () => {myDialog.show()});

let closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", () => {myDialog.close()});

let submitForm = document.getElementById("submitForm");
let myForm = document.getElementById("modalForm");

// make submit button create new book object, push to array, and loop through array again
// problem: how to access the form data that is given? 

submitForm.addEventListener("click", (function(event) {
    //prevent default function of submit button.
    event.preventDefault();
    console.log((document.getElementById("title")).value)
    
    
        bookTitle   = (document.getElementById("title").value)
        bookAuthor  = (document.getElementById("author").value)
        bookPages   = (document.getElementById("pages").value)
        bookRead    = (document.getElementById("read").value)

        let newBook = new Book (bookTitle, bookAuthor, bookPages, bookRead);

    
    console.log(newBook);

    myLibrary.push(newBook);
    console.log(myLibrary);

    libraryDisplay();
    myDialog.close();

 
}));



