// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  const result = authors.find((author) => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find((book) => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  const completeBooks = [notReturned, returned];
  return completeBooks;
}

function getBorrowersForBook(book, accounts) {
  const borrowInfo = book.borrows.slice(0, 10);
  const result = borrowInfo.map((info) => {
    const user = accounts.find((userInfo) => userInfo.id === info.id);
    return {...info, ...user};
  });
return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
