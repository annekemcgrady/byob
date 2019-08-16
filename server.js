const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const express = require('express');
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = "Mystery Authors & Books"

app.get('/api/v1/authors', (request, response) => {
  database('authors').select()
  .then((authors) => {
    if(authors.length) {
    response.status(200).json(authors);
    } else {
      response.status(404).json('No authors found')
    }
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

//AUTHOR POST
app.post('/api/v1/authors', (request, response) => {
  let author = request.body;

  for (let requiredParameter of ['first_name', 'last_name', 'birth_year']) {
    if (!author[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { first_name: <String>, last_name: <String>, birth_year: <Integer>}. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('authors').insert(author, 'id')
    .then(author => {
      response.status(201).json({ id: author[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });

  })
  

app.get('/api/v1/authors/:id/books', (request, response) => {
  database('books').where('author_id', request.params.id).select()
    .then((books) => {
      if(books.length) {
      response.status(200).json(books)
      } else {
        response.status(404).json('No books found for this author')
      }
    })
      .catch((error) => {
        response.status(500).json({ error});
      })
})

app.get('/api/v1/authors/:id/books/:book_id', (request, response) => {
  database('books').where('author_id', request.params.id).andWhere('id', request.params.book_id).select()
    .then((books) => {
      if(books.length) {
      response.status(200).json(books)
      } else {
        response.status(404).json('No book with this ID was found')
      }
    })
      .catch((error) => {
        response.status(500).json({ error })
      })
})

//BOOK POST - make sure it is adding an author id!!
app.post('/api/v1/authors/:id/books', (request, response) => {
  let book = request.body;

  for (let requiredParameter of ['title', 'publication_year']) {
    if (!book[requiredParameter]) {
      return response
        .status(422)
        .send({ error: `Expected format: { title: <String>, publication_year: <Integer>}. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('books').where('author_id', request.params.id).insert(book, 'id', 'author_id')
    .then(book => {
      response.status(201).json({ id: book[0] })
    })
    .catch(error => {
      response.status(500).json({ error });
    });

  })

  //DELETE FOR AUTHOR - NEEDS TO ALSO DELETE AUTHORS BOOKS - IF ELSE FOR A 404??
app.delete('/api/v1/authors/:id', (request, response) => {

  const deletePromises = [database('authors').where('id', request.params.id).del(), database('books').where('author_id', request.params.id).del()]
  Promise.all(deletePromises)
  .then((books) => {
    response.status(201).json(`Author with id ${request.params.id} has been deleted.`)
  })
  .catch(error => {
    response.status(500).json({ error });
  })
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});