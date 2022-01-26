import { makeAutoObservable } from "mobx";
import members from "../members";
import books from "../books";
class LibraryStore {
  booksData = books;
  membersData = members;
  constructor() {
    makeAutoObservable(this);
  }
}

const libraryStore = new LibraryStore();
export default libraryStore;
