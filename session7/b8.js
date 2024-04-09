var Book = /** @class */ (function () {
    function Book(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    Book.prototype.printBook = function () {
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
        console.log("Price: ".concat(this.price));
    };
    Book.prototype.updateBook = function (title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    };
    return Book;
}());
var myBook = new Book("phi phai", "cr7", 10);
console.log("Thông tin ban đầu của sách:");
myBook.printBook();
myBook.updateBook("kkkkkk", "tabi", 12);
console.log("Thông tin sau khi cập nhật sách:");
myBook.printBook();
