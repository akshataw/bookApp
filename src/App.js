import React from 'react';
import axios from 'axios';
import {
  Container,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      newBookData: {
        title: '',
        rating: '',
      },
      addModalState: false,
    };

    this.toggleNewBookModal = this.toggleNewBookModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.refreshList();
  }

  toggleNewBookModal = () => {
    this.setState({
      addModalState: !this.state.addModalState,
    });
  };

  addBook = () => {
    axios
      .post('http://localhost:3005/books', this.state.newBookData)
      .then((res) => {
        let { books } = this.state;
        books.push(res.data);
        this.setState({
          books,
          newBookData: {
            title: '',
            rating: '',
          },
          addModalState: false,
        });
      });
  };

  handleChange = (e) => {
    let { newBookData } = this.state;
    newBookData[e.target.name] = e.target.value;
    this.setState({
      newBookData,
    });
  };

  refreshList = () => {
    axios.get('http://localhost:3005/books').then((resp) => {
      this.setState({
        books: resp.data,
      });
    });
  };

  render() {
    const { books } = this.state;

    return (
      <Container className="App">
        <h1>Book App</h1>
        <Button
          className="my-3"
          color="primary"
          onClick={this.toggleNewBookModal}
        >
          Add Book
        </Button>
        <Modal
          isOpen={this.state.addModalState}
          toggle={this.toggleNewBookModal}
        >
          <ModalHeader toggle={this.toggleNewBookModal}>
            Add a new Book
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                id="title"
                value={this.state.newBookData.title}
                name="title"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="rating">Rating</Label>
              <Input
                id="rating"
                value={this.state.newBookData.rating}
                name="rating"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook}>
              Add Book
            </Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Ratings</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <BookList books={books} refreshList={this.refreshList} />
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default App;
