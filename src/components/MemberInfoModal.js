import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import libraryStore from "./LibraryStore";

const MemberInfoModal = ({ indvMember }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bookIdName = indvMember.currentlyBorrowedBooks.map((book) => {
    libraryStore.booksData.forEach((libraryBook) => {
      if (+book === +libraryBook.id) {
        book = libraryBook.title;
      }
    });
    return <h5>{book}</h5>;
  });

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Member Info
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Member Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            <strong>First Name</strong> : {indvMember.firstName}
          </h4>
          <h4>
            <strong>Last Name</strong>: {indvMember.lastName}
          </h4>
          <h4>
            <strong>Membership</strong>: {indvMember.membership}
          </h4>
          <h4>
            <strong>Books Borrowed</strong>: {bookIdName}
          </h4>
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

export default MemberInfoModal;
