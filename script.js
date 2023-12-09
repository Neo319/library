console.log("I'm here!");


const cardsDisplay = document.getElementById("cards");


const myLibrary = [];



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
                closeCard.addEventListener("click", () => {removeBook(Book)});
                closeCard.classList = "closeCard";
                myCard.appendChild(closeCard);
            })};

libraryDisplay();

function removeBook(book) {
    console.log(myLibrary.indexOf(book));
    myLibrary.splice(myLibrary.indexOf(book), 1);
    libraryDisplay();
}




let newBookBtn = document.querySelector("button");
let myDialog = document.querySelector("dialog");
newBookBtn.addEventListener("click", () => {myDialog.show()});

let closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", () => {myDialog.close()});

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
    myLibrary.push(newBook);
    // console.log(myLibrary);

    libraryDisplay();
    myDialog.close();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.checked = false;
}));



// notes for next time:
// 1. fix up the read checkbox
// 2. fix form submit validation so that it will not accept the form unless it meets requirements... (idea: if statement + alert() + break)
// 3. update styles, make it responsive, and we're done!!