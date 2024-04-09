class Book {
  constructor(
    public title: string,
    public author: string,
    public price: number
  ) {}

  printBook(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Price: ${this.price}`);
  }

  updateBook(title: string, author: string, price: number): void {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

let myBook = new Book("phi phai", "cr7", 10);

console.log("Thông tin ban đầu của sách:");
myBook.printBook();

myBook.updateBook("kkkkkk", "tabi", 12);

console.log("Thông tin sau khi cập nhật sách:");
myBook.printBook();
