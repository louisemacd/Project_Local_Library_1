// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  const result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return result;
}

function getTotalNumberOfBorrows(account, books) { 
  const result = books.filter((book) => book.borrows.find((borrowed) => borrowed.id === account.id)); 
    return result.length;
}

function getBooksPossessedByAccount(account, books, authors) {
const checkedOut = books.filter((book) => book.borrows.find((borrowed) => borrowed.id === account.id && borrowed.returned === false));
const result = checkedOut.map((book) => {
  const foundAuthors = authors.find((author) => author.id === book.authorId);
 return {...book, author: foundAuthors };
});
return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
