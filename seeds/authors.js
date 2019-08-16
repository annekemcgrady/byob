let authorData = require('../data.js');

const createAuthor = (knex, author) => {
  return knex('authors').insert({
    first_name: author.first_name,
    last_name: author.last_name,
    birth_year: author.birth_year
  }, 'id')
  .then(authorId => {
    let bookPromises = [];

    author.books.forEach(book => {
      bookPromises.push(
        createBook(knex, {
          title: book.title,
          publication_year: book.pub_year,
          author_id: authorId[0]
        })
      )
    });

    return Promise.all(bookPromises);
  })
  };

  const createBook = (knex, book) => {
    return knex('books').insert(book)
  };

exports.seed = (knex) => {
  return knex('books').del()
  .then(() => knex('authors').del())
  .then(() => {
    let authorPromises = [];

    authorData.forEach(author => {
      authorPromises.push(createAuthor(knex,author));
    });

    return Promise.all(authorPromises);
  })
  .catch(error => console.log(`Error seeding data: ${error}`))
};
