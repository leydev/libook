import { instance } from './instance';

export function postBooks(payload) {
  return instance.post('/books', payload);
}

export function getBooksById(id) {
  return instance.get(`/books/${id}`);
}

export function getBooks() {
  return instance.get('/books');
}

export function patchBooks(id, payload) {
  return instance.patch(`/books/${id}`, payload);
}
