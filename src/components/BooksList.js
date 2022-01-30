import React, { useState } from "react";
import BookItem from "./BookItem";
import CreateBookModal from "./CreateBookModal";
import libraryStore from "./LibraryStore";
import { observer } from "mobx-react";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

const BooksList = () => {
  const [query, setQuery] = useState("");
  const [bookgenre, setBookGenre] = useState("");

  const booksArray = libraryStore.booksData
    .filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) &&
        book.genre.some((genre) =>
          genre.toLowerCase().includes(bookgenre.toLowerCase())
        )
    )
    .map((book) => <BookItem book={book} />);

  const handleOnChange = (event) => setQuery(event.target.value);
  const handleOnSelectGenre = (event) => setBookGenre(event.target.value);
  return (
    <div>
      <div className="mainBookList">
        <div className="searchBar">
          <input onChange={handleOnChange} placeholder="Search..." />
        </div>
        <div className="selectArea">
          <select class="form-select" onChange={handleOnSelectGenre}>
            <option value="" selected>
              All Genres
            </option>
            {libraryStore.genreList.map((genre) => (
              <option value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>
      <CreateBookModal />
      <div className="bookList">{booksArray}</div>
    </div>
  );
};

export default observer(BooksList);
