console.log("I'm here!");


const cardsDisplay = document.getElementById("cards");


const myLibrary = [];


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

        this.sayname = function () {
            return this.title;
        };

        this.info = function () {
            let readText = "not read yet";
            if (read === "read") { readText = "read"; };

            return `${title} by ${author}, ${pages} pages, ${readText}.`;
        };

        this.addToLibrary = function () {
            let myCard = document.createElement("div");
            myCard.classList = "card";
            let cardInfo = document.createElement("p");
            cardsDisplay.appendChild(myCard);
            myCard.appendChild(cardInfo);

            let readText = "not read yet";
            if (read === "read") { readText = "read"; };

            cardInfo.textContent = `${title} by ${author}, ${pages} pages, ${readText}.`
            myCard.appendChild (cardInfo);

        }
    }
}

const book1 = new Book ('The Hobbit', 'J.R.R Tolkien', '295', 'read')
const book2 = new Book ("Art of War", "Sun Tzu", "260", "read")

console.log(book1.info());
console.log(book2.info());



function addBookToLibrary() {

}




book1.addToLibrary();
book2.addToLibrary();



let myButton = document.querySelector("button");
let myDialog = document.querySelector("dialog");
myButton.addEventListener("click", () => {myDialog.show()});

let closeDialog = document.getElementById("closeDialog");
closeDialog.addEventListener("click", () => {myDialog.close()});




