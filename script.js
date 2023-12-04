console.log("I'm here!");




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
    }
}

const book1 = new Book ('The Hobbit', 'J.R.R Tolkien', '295', 'read')
const book2 = new Book ("Art of War", "Sun Tzu", "260", "read")

console.log(book1.info());
console.log(book2.info());


console.log(Object.getPrototypeOf(book1));


