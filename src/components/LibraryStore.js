import { makeAutoObservable } from "mobx";
import members from "../members";
import books from "../books";
class LibraryStore {
  booksData = books;
  membersData = members;
  genreList = [
    "fiction",
    "biography",
    "business",
    "entreperneurship",
    "fantasy",
    "crime",
  ];

  constructor() {
    makeAutoObservable(this);
  }
  addMember = (member) => {
    member.id = this.membersData[this.membersData.length - 1].id + 1;
    member.slug =
      member.firstName.toLowerCase() + "-" + member.lastName.toLowerCase();
    this.membersData.push(member);
    console.log(member);
  };

  handleAddBook = (book) => {
    book.id = this.booksData[this.booksData.length - 1].id + 1;
    book.slug = book.title.toLowerCase();
    this.booksData.push(book);
    console.log(book);
  };
}

const libraryStore = new LibraryStore();
export default libraryStore;
