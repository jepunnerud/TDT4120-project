import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

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

export async function getBookOnId(bookid) {
  const record = await pb.collection('books').getOne(bookid);
  return record;
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

export async function addAuthor(author) {
  const data = { name: author };
  Promise.resolve(getAuthor(author)).then((value) => {
    if (value.length == 0) {
      pb.collection('authors').create(data, { $autoCancel: false });
    }
  });
}
