const {addBook, 
    getAllBooks, getBooksbyId,
    editBookbyId, deleteBookbyId} = require('./handler');
const routes = [
  {
    method: "POST",
    path: "/books",
    handler: addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBooksbyId,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookbyId,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookbyId,
  },
];
 
module.exports = routes;