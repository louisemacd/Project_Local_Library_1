// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const result = books.filter((book) => book.borrows.find((borrowed) => borrowed.returned === false)); 
  return result.length;
}

function sortObject(obj){
  const keysValue = Object.keys(obj)
  return keysValue.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  }); 
}

function getMostCommonGenres(books) {
  const count = books.reduce((acc, { genre }) => {
    if (acc[genre]) {
      acc[genre] += 1;
    } else {
      acc[genre] = 1;
    }
    return acc;
  }, {});

  const sorted = sortObject(count);
  return sorted.map((name) => ({ name, count: count[name] })).slice(0, 5);
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const bookObject = {
      name: book.title,
      count: book.borrows.length
    }
    return bookObject;
  });
  return result.sort((bookA, bookB) => bookA.count < bookB.count ? 1 : -1).slice(0, 5);
} 

function getMostPopularAuthors(books, authors) {
  const booksByAuthor = [];
  for (let i = 0; i < books.length; i++){
    for (let j = 0; j < authors.length; j++){
      if (books[i].authorId === authors[j].id){
        booksByAuthor.push({name: `${authors[j].name.first} ${authors[j].name.last}`, count: books[i].borrows.length})
      }
    }
  }
 
const sum = [];
for (let i = 0; i < booksByAuthor.length; i++){
  const name = booksByAuthor[i].name;
  if (!sum.hasOwnProperty(name)){
    sum.push(booksByAuthor[i]);
  } else {
    sum.count += booksByAuthor[i].count;
  }
}
return sum.sort((authorA, authorB) => authorA.count < authorB.count ? 1 : -1).slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
