const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2001, edition: 2011 },
  { title: 'Book Nine', genre: 'Biography', publish: 1995, edition: 2005 },
  { title: 'Book Ten', genre: 'Philosophy', publish: 1990, edition: 2000 }
];

const userBooks = books.filter((book) => {
    return book.genre === 'Fiction' && book.publish < 2000;
})

console.log(userBooks)