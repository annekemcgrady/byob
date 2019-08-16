const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
app.locals.title = "Mystery Authors & Books"

app.get('/api/v1/authors', (request, response) => {
  database('authors').select()
  .then((authors) => {
    response.status(200).json(authors);
  })
  .catch((error) => {
    response.status(500).json({ error });
  });
})


app.get('/api/v1/authors/:id', (request, response) => {
  database('authors').where('id', request.params.id).select()
    .then((authors) => {
      if(authors.length) {
        response.status(200).json(authors)
      } else {
        response.status(404).json({
          error: `Could not find author with an id of ${request.params.id}`
        })
      }
  })
  .catch(error => {
    response.status(500).json({ error });
  })
});


app.get('/api/v1/authors/:id/books', (request, response) => {
  database('books').where('author_id', request.params.id).select()
    .then((books) => {
      response.status(200).json(books)
    })
      .catch((error) => {
        response.status(500).json({ error});
      })
})

app.get('/api/v1/authors/:id/books/:book_id', (request, response) => {
  database('books').where('author_id', request.params.id).andWhere('id', request.params.book_id).select()
    .then((books) => {
      response.status(200).json(books)
    })
      .catch((error) => {
        response.status(500).json({ error })
      })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});