import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import libraryStore from "./LibraryStore";

const BookInfoModal = ({ book }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selectedMember, setSelectedMember] = useState("");

  const borrower = libraryStore.membersData.find((member) =>
    member.currentlyBorrowedBooks.includes(book.id)
  );

  const handleReturn = () => {
    libraryStore.membersData.map((member) => {
      const bookIndex = member.currentlyBorrowedBooks.indexOf(book.id);
      const memberIndex = book.borrowedBy.indexOf(member.id);

      if (+borrower.id === +member.id) {
        member.currentlyBorrowedBooks.splice(bookIndex, 1); // 2nd parameter means remove one item only

        libraryStore.booksData.map((bookSelected) => {
          if (+bookSelected.id === +book.id) {
            bookSelected.available = true;
            book.borrowedBy.splice(memberIndex, 1); // 2nd parameter means remove one item only
          }
        });
      }
    });

    alert("book has been returned");
  };
  const onSubmit = () => {
    libraryStore.membersData.map((member) => {
      if (+selectedMember === +member.id) {
        member.currentlyBorrowedBooks = [
          ...member.currentlyBorrowedBooks,
          book.id,
        ];
        libraryStore.booksData.map((bookSelected) => {
          if (+bookSelected.id === +book.id) {
            bookSelected.borrowedBy = [...bookSelected.borrowedBy, member.id];
            bookSelected.available = false;
          }
        });
      }
    });

    alert("book has Been borrowed");
  };
  const handleOnSelectGenre = (event) => {
    const memberSelected = event.target.value;
    setSelectedMember(memberSelected);
  };
  function bookAvailablity() {
    if (book.available) {
      return (
        <div>
          <h4>
            <strong>Book is available</strong>
          </h4>
          <select class="form-select" onChange={handleOnSelectGenre}>
            <option value="" selected>
              All Members
            </option>
            {libraryStore.membersData.map((member) => (
              <option value={member.id}>
                {member.firstName} {member.lastName}
              </option>
            ))}
          </select>
          <br />
          <button className="button" onClick={onSubmit}>
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h4 style={{ color: "red" }}>
            <strong>Book is not available</strong>
          </h4>
          <h4>
            <strong>Borrowed By</strong> :{borrower.firstName}{" "}
            {borrower.lastName}
          </h4>
          <br />
          <button className="button" onClick={handleReturn}>
            Return the book
          </button>
        </div>
      );
    }
  }

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Book Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            <strong>Title </strong>: {book.title}
          </h4>
          <h4>
            <strong>Author </strong>: {book.author}
          </h4>
          <h4>
            <strong>Genre </strong>: {book.genre.join(", ")}
          </h4>

          {bookAvailablity()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BookInfoModal;
