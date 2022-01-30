import React, { useState } from "react";
import libraryStore from "./LibraryStore";
import MultiSelect from "react-bootstrap-multiselect";
import { Button, Dropdown, DropdownButton, Form, Modal } from "react-bootstrap";

const CreateBookModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [genreselect, setGenreSelect] = useState([]);

  const [addBook, setAddBook] = useState({
    id: "",
    slug: "",
    author: "",
    title: "",
    genre: [],
    available: true,
    borrowedBy: [],
  });

  // for submit
  const handleOnSubmit = (event) => {
    event.preventDefault();
    libraryStore.handleAddBook(addBook);
    handleClose();
  };

  const handleOnChange = (event) => {
    setAddBook({ ...addBook, [event.target.name]: event.target.value });
    console.log(addBook);
  };

  const handleOnChangeGenres = (event) => {
    const genres = [...genreselect, event.target.value];
    setGenreSelect(genres);
    setAddBook({ ...addBook, genre: genres });
    console.log(addBook);
  };

  return (
    <div>
      <div className="addBookArea">
        <Button variant="primary" onClick={handleShow}>
          Add a Book
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>

              <Form.Control
                type="text"
                placeholder="Title"
                onChange={handleOnChange}
                name="title"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author"
                onChange={handleOnChange}
                name="author"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Genre</Form.Label>
              <div>
                {libraryStore.genreList.map((genre) => (
                  <Form.Check
                    inline
                    label={genre}
                    name="genre"
                    value={genre}
                    onChange={handleOnChangeGenres}
                  />
                ))}
              </div>
            </Form.Group>
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

export default CreateBookModal;
