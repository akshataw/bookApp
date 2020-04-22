import React from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import axios from 'axios';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editBookData: {
        id: 0,
        title: '',
        rating: '',
      },
      editModalState: false,
    };

    this.toggleEditBookModal = this.toggleEditBookModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editBook = this.editBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  toggleEditBookModal = () => {
    this.setState({
      editModalState: !this.state.editModalState,
    });
  };

  handleChange = (e) => {
    let { editBookData } = this.state;
    editBookData[e.target.name] = e.target.value;
    this.setState({
      editBookData,
    });
  };

  editBook = (id, title, rating) => {
    this.setState({
      editBookData: {
        id,
        title,
        rating,
      },
      editModalState: !this.state.editModalState,
    });
  };

  updateBook = () => {
    let { title, rating } = this.state.editBookData;
    axios
      .put('https://tranquil-gorge-80875.herokuapp.com/books/' + this.state.editBookData.id, {
        title,
        rating,
      })
      .then((res) => {
        //   console.log(res.data);
        this.props.refreshList();

        this.setState({
          editModalState: false,
        });
      })
      .catch((err) => console.log(err));
  };

  deleteBook = (id) => {
    axios.delete('https://tranquil-gorge-80875.herokuapp.com/books/' + id).then((res) => {
      this.props.refreshList();
    });
  };

  render() {
    const { books } = this.props;
    return (
      <>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.rating}</td>
            <td>
              <Button
                color="success"
                size="sm"
                className="mr-2"
                onClick={this.editBook.bind(
                  this,
                  book.id,
                  book.title,
                  book.rating
                )}
              >
                Edit
              </Button>
              <Button
                color="danger"
                size="sm"
                onClick={this.deleteBook.bind(this, book.id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}

        <Modal
          isOpen={this.state.editModalState}
          toggle={this.toggleEditBookModal}
        >
          <ModalHeader toggle={this.toggleEditBookModal}>
            Add a new Book
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="bookTitle">Title</Label>
              <Input
                id="bookTitle"
                value={this.state.editBookData.title}
                name="title"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="bookRating">Rating</Label>
              <Input
                id="bookRating"
                value={this.state.editBookData.rating}
                name="rating"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.updateBook}>
              Update Book
            </Button>{' '}
            <Button color="secondary" onClick={this.toggleEditBookModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default BookList;
