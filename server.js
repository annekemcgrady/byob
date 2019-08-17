//establishing the environment 
const environment = process.env.NODE_ENV || 'development';
//requiring needed libaries and giving configuration info
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)
const express = require('express');
//creating an instance of an express app
const app = express();
//telling server to expect json format
app.use(express.json());

//setting the port as the one provided by heroku or a default port of 3000
app.set('port', process.env.PORT || 3000);
//giving the local server a title
app.locals.title = "Mystery Authors & Books"

//Author Data Endpoints

//GET endpoint for a list of authors (current instance of app, the method, the path and a handler function)
app.get('/api/v1/authors', (request, response) => {
  //go to authors data base and select all records
  database('authors').select()
  //once resolved, if there are records found send an http response code of 200 
  //and the author records in json format
  .then((authors) => {
    if(authors.length) {
    response.status(200).json(authors);
    //of if there are no records send a 404 response code and message in JSON format
    } else {
      response.status(404).json('No authors found')
    }
  })
  //if any errors occur in the above promises send a 500 response code - server error
  .catch((error) => {
    response.status(500).json({ error });
  });
})

//GET endpoint for one specific author
app.get('/api/v1/authors/:id', (request, response) => {
  //go to authors database and select record with an id that matches the id the user
  //entered in the get request parameters
  database('authors').where('id', request.params.id).select()
   //once resolved, if there is a record found send an http response code of 200 
  //and the author record in json format
    .then((authors) => {
      if(authors.length) {
        response.status(200).json(authors)
        //of if there is no record send a 404 response code and message in JSON format
      } else {
        response.status(404).json({
          error: `Could not find author with an id of ${request.params.id}`
        })
      }
  })
  //if any errors occur in the above promises send a 500 response code - server error
  .catch(error => {
    response.status(500).json({ error });
  })
});

//POST endpoint for adding a new author
app.post('/api/v1/authors', (request, response) => {
  //setting a variable to capture the body of the http request
  let author = request.body;

  //establishing the required parameters for the POST request
  for (let requiredParameter of ['first_name', 'last_name', 'birth_year']) {
    //if the user does not include the required parameters
    if (!author[requiredParameter]) {
      //return a 422 unprocessible entity code and an error message
      return response
        .status(422)
        .send({ error: `Expected format: { first_name: <String>, last_name: <String>, birth_year: <Integer>}. You're missing a "${requiredParameter}" property.` });
    }
  }
//Go to authors database and insert a new record with the info from request body and a unique id
  database('authors').insert(author, 'id')
  //then if it was successful, send a 201 response code to indicate something was 
  //created and a response of the new id for the added author in JSON format
    .then(author => {
      response.status(201).json({ id: author[0] })
    })
     //if any errors occur in the above promises send a 500 response code - server error
    .catch(error => {
      response.status(500).json({ error });
    });

  })
//Books Data Endpoints

//GET endpoint for all books for a specific author  
app.get('/api/v1/authors/:id/books', (request, response) => {
   //go to books database and select all records with a foreign key 
   //that matches id in request params
  database('books').where('author_id', request.params.id).select()
  //if record(s) found return 200 code and the record(s) in JSON
    .then((books) => {
      if(books.length) {
      response.status(200).json(books)
      //if no records found return a 404 code and message indicating nothing found
      } else {
        response.status(404).json('No books found for this author')
      }
    })
    //if any errors occur in the above promises send a 500 response code - server error
      .catch((error) => {
        response.status(500).json({ error});
      })
})
//GET endpoint for one book - requires both author id and a book id
app.get('/api/v1/authors/:id/books/:book_id', (request, response) => {
  //go to books db and find record where foreign key matches author's id 
  //and id matches book id providedin the request params.
  database('books').where('author_id', request.params.id).andWhere('id', request.params.book_id).select()
  //if record found return 200 code and the record in JSON
  .then((books) => {
      if(books.length) {
      response.status(200).json(books)
       //if no records found return a 404 code and message indicating nothing found
      } else {
        response.status(404).json('No book with this ID was found')
      }
    })
    //if any errors occur in the above promises send a 500 response code - server error
      .catch((error) => {
        response.status(500).json({ error })
      })
})
//POST endpoint to add a book for an existing author
app.post('/api/v1/authors/:id/books', (request, response) => {
   //setting a variable to capture the body of the http request
  let book = request.body;
//establishing the required parameters for the POST request
  for (let requiredParameter of ['title', 'publication_year', 'author_id']) {
     //if the user does not include the required parameters
    if (!book[requiredParameter]) {
    //send a 422 unprocessibly entity code and error message
      return response
        .status(422)
        .send({ error: `Expected format: { title: <String>, publication_year: <Integer>, author_id: <Integer>}. You're missing a "${requiredParameter}" property.` });
    }
  }
//Go to books database and find records with foreign key matching id in request params
//insert a new record with a unique id
  database('books').where('author_id', request.params.id).insert(book, 'id')
  //if successful send a 201 code and the id of the new book 
    .then(book => {
      response.status(201).json({ id: book[0] })
    })
    //if any errors occur in the above promises send a 500 response code - server error
    .catch(error => {
      response.status(500).json({ error });
    });

  })

//DELETE endpoint - removes an author and all of that author's books
app.delete('/api/v1/authors/:id', (request, response) => {
//creating an array of two promies - first goes to books database and removes all records 
//with the foreign key that matches the author_id provided in params. Second goes to
//authors database and removes the record with the id that matches id in params
  const deletePromises = [database('books').where('author_id', request.params.id).del(), database('authors').where('id', request.params.id).del()]
  //wait for both promises above to resolve
  Promise.all(deletePromises)
  //send a 201 code and message in JSON telling user the author was deleted
  .then((authors) => {
    response.status(201).json(`Author with id ${request.params.id} has been deleted.`)
  })
  //if any errors occur in the above promises send a 500 response code - server error
  .catch(error => {
    response.status(500).json({ error });
  })
});

//telling server to listen on the port that was established earlier
app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});