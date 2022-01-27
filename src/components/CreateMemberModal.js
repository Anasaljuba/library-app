import React, { useState } from "react";
import libraryStore from "./LibraryStore";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";

const CreateMemberModal = () => {
  const [booksBorrowed, setBooksBorrowed] = useState([]);

  const [addMember, setAddMember] = useState({
    id: "",
    slug: "",
    firstName: "",
    lastName: "",
    membership: "",
    currentlyBorrowedBooks: [],
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (event) => {
    setAddMember({ ...addMember, [event.target.name]: event.target.value });
  };

  const handleOnDropMembership = (event) => {
    setAddMember({ ...addMember, membership: event });
  };

  const handleOnDropBook = (event) => {
    //book is not assigned
    setBooksBorrowed([...booksBorrowed, event]);
    setAddMember({ ...addMember, currentlyBorrowedBooks: booksBorrowed });
    libraryStore.booksData.find((book) => {
      if (+book.id === +event) {
        book.available = false;
      }
    });
  };
  console.log(addMember);
  const handleOnSubmit = (event) => {
    event.preventDefault();

    libraryStore.addMember(addMember);
    setBooksBorrowed([]);
    handleClose();
  };

  const bookList = libraryStore.booksData
    .filter((book) => book.available === true)
    .map((book) => (
      <Dropdown.Item href="#/action-1" eventKey={book.id}>
        {book.title}
      </Dropdown.Item>
    ));

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a new Member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="First Name"
                onChange={handleOnChange}
                name="firstName"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                onChange={handleOnChange}
                name="lastName"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <DropdownButton
                id="dropdown-basic-button"
                title="Books"
                onSelect={handleOnDropBook}
                required
              >
                {bookList}
              </DropdownButton>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <DropdownButton
                required
                id="dropdown-basic-button"
                title="MemberShip"
                onSelect={handleOnDropMembership}
                required
              >
                <Dropdown.Item href="#/action-1" eventKey="platinum">
                  Platinum
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1" eventKey="gold">
                  Gold
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1" eventKey="silver">
                  Silver
                </Dropdown.Item>
              </DropdownButton>
            </Form.Group>
            <div></div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateMemberModal;
