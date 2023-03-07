'use client';
import '../globals.css';
import {
  Card,
  Input,
  Textarea,
  Row,
  Spacer,
  Button,
  Loading,
} from '@nextui-org/react';
import Rows from '../components/Rows';
import { useEffect, useState } from 'react';
import pb, {
  getBook,
  addAuthor,
  getAuthor,
  getUserById,
} from '../(lib)/pocketbase';

const year = new Date().getFullYear();

export default () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [description, setDescription] = useState(null);
  const [releaseYear, setReleaseYear] = useState(null);
  const [genre, setGenre] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const formData = new FormData();
  useEffect(() => {
    const a = async () => {
      setLoading(true);
      if (pb.authStore.isValid) {
        const user = await getUserById(pb.authStore.model.id);
        setAdmin(user[2]);
      }
      console.log(admin);
      setLoading(false);
    };
    a();
  }, []);

  const handleSubmit = () => {
    const files = document.getElementById('imageUpload').files;
    if (!(title && description && author && releaseYear && genre)) {
      window.alert('Please fill in all fields');
      return;
    }
    if (releaseYear > year) {
      window.alert('A book cannot be from the future');
      return;
    }
    if (files.length > 0) {
      formData.append('image', files[0]);
    }
    formData.append('title', title);
    formData.append('description', description);
    formData.append('releaseyear', releaseYear);
    formData.append('genre', genre);

    let newAuth = [];
    let book;
    addAuthor(author).then(() =>
      sleep(500)
        .then(() => getAuthor(author).then((value) => (newAuth = value)))
        .then(() => formData.append('author', newAuth[1]))
        .then(() => getBook(title).then((value) => (book = value)))
        .then(() => {
          if (book.length == 0) {
            pb.collection('books')
              .create(formData)
              .then(() => getBook(title).then((value) => (book = value)))
              .then(() => newAuth[2].push(book[1]))
              .then(() =>
                pb
                  .collection('authors')
                  .update(newAuth[1], { books: newAuth[2] })
              );
          } else {
            window.alert('That book already exists in the database!');
          }
        })
    );
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('description').value = '';
    document.getElementById('releaseYear').value = '';
    document.getElementById('imageUpload').value = null;
    document.getElementById('dropdown').value = '';
    window.alert('Book added!');
  };

  const components = [
    <Input
      id="title"
      bordered
      labelPlaceholder="Title"
      color="#22b573"
      width="80%"
      onChange={(e) => setTitle(e.target.value)}
    />,
    <Input
      id="author"
      bordered
      labelPlaceholder="Author"
      color="#22b573"
      width="80%"
      onChange={(e) => setAuthor(e.target.value)}
    />,
    <Textarea
      id="description"
      bordered
      labelPlaceholder="Description"
      color="#22b573"
      width="80%"
      onChange={(e) => setDescription(e.target.value)}
    />,
  ];

  const chooseComponents = () => {
    if (isLoading) return <Loading></Loading>;
    else if (admin) {
      return (
        <Card.Body>
          <h1
            style={{ textAlign: 'center', color: '#22b573', marginBottom: 40 }}
          >
            Fill in book details
          </h1>
          <Rows components={components} gap={2}></Rows>
          <Row>
            <Input
              id="releaseYear"
              bordered
              type="Number"
              labelPlaceholder="Release year"
              color="#22b573"
              width="17%"
              css={{ position: 'fixed', left: 100 }}
              onChange={(e) => setReleaseYear(e.target.value)}
            />
            <input
              type="file"
              id="imageUpload"
              accept=".png, .jpg, .jpeg"
              style={{ position: 'fixed', right: 260, bottom: 200 }}
            ></input>
            <select
              id="dropdown"
              onChange={() =>
                setGenre(document.getElementById('dropdown').value)
              }
              style={{ position: 'fixed', right: 100 }}
              className="dropdownSelect"
            >
              <option value="">Select genre</option>
              <option value="Action">Action</option>
              <option value="Comedy">Comedy</option>
              <option value="Comic">Comic</option>
              <option value="Crime">Crime</option>
              <option value="Factual">Factual</option>
              <option value="Fairytale">Fairytale</option>
              <option value="Fantasy">Fantasy</option>
              <option value="History">History</option>
              <option value="Horror">Horror</option>
              <option value="Romance">Romance</option>
              <option value="Science">Science</option>
              <option value="Short story">Short story</option>
            </select>
          </Row>
          <Spacer y={5}></Spacer>
          <Row>
            <Button
              css={{
                backgroundColor: '#22b573',
                position: 'fixed',
                left: 300,
              }}
              onPress={handleSubmit}
            >
              Submit
            </Button>
          </Row>
          <Spacer y={2}></Spacer>
        </Card.Body>
      );
    } else return <h1>Must be admin to create a new book</h1>;
  };

  return (
    <Card css={{ mw: '800px', minHeight: '600px', margin: 'auto', zIndex: 0 }}>
      {chooseComponents()}
    </Card>
  );
};
