import React from "react";
import BookInfoModal from "./BookInfoModal";

const BookItem = ({ book }) => {
  return (
    <div className="bookItem">
      <h5>
        <strong>Title</strong> : {book.title}
      </h5>
      <h5>
        <strong>Author</strong> : {book.author}
      </h5>
      <h5>
        <strong>Genre</strong> : {book.genre.join(", ")}
      </h5>

      <BookInfoModal book={book} />
    </div>
  );
};

export default BookItem;
