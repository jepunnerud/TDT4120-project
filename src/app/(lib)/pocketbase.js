import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

export default pb;

export async function getAuthor(name) {
  const auth = [];
  const res = await pb.collection('authors').getFullList();
  res.forEach((record) => {
    if (record.name.toLowerCase() === name.toLowerCase()) {
      auth.push(record.name);
      auth.push(record.id);
      auth.push(record.books);
    }
  });
  return auth;
}

export async function getRecordById(collection, id) {
  Promise.resolve(pb.collection(collection).getOne(id)).then((value) => {
    return value;
  });
}

export async function getBook(title) {
  const book = [];
  const res = await pb.collection('books').getFullList();
  res.forEach((record) => {
    if (record.title.toLowerCase() === title.toLowerCase()) {
      book.push(record.title);
      book.push(record.id);
    }
  });
  return book;
}

export async function getBookById(id) {
  const book = [];
  const res = await pb.collection('books').getFullList();
  res.forEach((record) => {
    if (record.id === id) {
      book.push(record.title);
      book.push(record.id);
    }
  });
  return book;
}

export async function getAuthorById(id) {
  const auth = [];
  const res = await pb.collection('authors').getFullList();
  res.forEach((record) => {
    if (record.id === id) {
      auth.push(record.name);
      auth.push(record.id);
    }
  });
  return auth;
}

export async function getBooksAndAuthors() {
  const books = await pb.collection('books').getFullList();
  const authors = await pb.collection('authors').getFullList();
  let res = [];

  books.forEach((book) => {
    res.push({
      collection: 'books',
      title: book.title,
      author: book.author,
      id: book.id,
    });
  });

  authors.forEach((author) => {
    res.push({
      collection: 'authors',
      name: author.name,
      books: author.books,
      id: author.id,
    });
  });
  return res;
}

export async function getUserById(id) {
  const user = [];
  const res = await pb.collection('users').getFullList();
  res.forEach((record) => {
    if (record.id === id) {
      user.push(record.username);
      user.push(record.id);
      user.push(record.admin);
      console.log(record.admin);
    }
  });
  return user;
}

export async function addAuthor(author) {
  const data = { name: author };
  Promise.resolve(getAuthor(author)).then((value) => {
    if (value.length == 0) {
      pb.collection('authors').create(data, { $autoCancel: false });
    }
  });
}
