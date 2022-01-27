import { makeAutoObservable } from "mobx";
import members from "../members";
import books from "../books";
class LibraryStore {
  booksData = books;
  membersData = members;

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
}

const libraryStore = new LibraryStore();
export default libraryStore;
