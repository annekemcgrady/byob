# BOOKS AND AUTHORS API SCHEMA

This API contains data on fiction authors and books by each author. New authors and new books by those authors can be added to the database.  An author and their books can also be removed from the database. All API access is over HTTP. All data is sent and received as JSON.

**The base URL for HTTP access is:**   
`http://authorsandbooks.herokuapp.com`

## AUTHOR DATA ENDPOINTS

**To GET a list of authors:**

`api/v1/authors`

*Example request:*

`GET api/v1/authors`

*Example response:*

```200 OK
[
    {
        "id": 1,
        "first_name": "Tana",
        "last_name": "French",
        "birth_year": 1977,
        "created_at": "2019-08-16T16:14:45.581Z",
        "updated_at": "2019-08-16T16:14:45.581Z"
    },
    {
        "id": 2,
        "first_name": "Agatha",
        "last_name": "Christie",
        "birth_year": 1890,
        "created_at": "2019-08-16T16:14:45.624Z",
        "updated_at": "2019-08-16T16:14:45.624Z"
    },
    {
        "id": 3,
        "first_name": "Dorothy",
        "last_name": "Sayers",
        "birth_year": 1893,
        "created_at": "2019-08-16T16:14:45.630Z",
        "updated_at": "2019-08-16T16:14:45.630Z"
    }
  ]```

**To GET a specific author:**

`/api/v1/authors/<AUTHOR_ID>`

*Example request:*

`GET /api/v1/authors/10`

*Example response:*

```200 OK

[
    {
        "id": 10,
        "first_name": "Wilkie",
        "last_name": "Collins",
        "birth_year": 1824,
        "created_at": "2019-08-16T16:14:45.646Z",
        "updated_at": "2019-08-16T16:14:45.646Z"
    }
]```

//FINISH POST AUTHOR AND BOOKS AND DELETE
**To POST a new author:**

`/api/v1/authors`

*Example request:*

`POST /api/v1/authors`

REQURIRED PARAMETERS: 

```Headers:  "Content-Type": "application/json"

Body: 
{
  "first_name": <String>,
  "last_name":<String>,
  "birth_year":<Integer>
}```

*Example response:*

```201 Created

{
  "id": 46
}```


**To DELETE an author and all associated books:**

`/api/v1/authors/<AUTHOR_ID>`

*Example request:*

`DELETE /api/v1/authors/10`

*Example response:*

```201 Created

Author with id 10 has been deleted.```

## BOOK DATA ENPOINTS

**To GET a list of books by a specific author:**

`/api/v1/authors/<AUTHOR_ID>/books`

*Example request:*

`GET /api/v1/authors/10/books`

*Example response:*

```200 OK 

[
    {
        "id": 22,
        "title": "The Moonstone",
        "publication_year": 1868,
        "author_id": 10,
        "created_at": "2019-08-16T16:14:45.695Z",
        "updated_at": "2019-08-16T16:14:45.695Z"
    },
    {
        "id": 23,
        "title": "No Name",
        "publication_year": 1862,
        "author_id": 10,
        "created_at": "2019-08-16T16:14:45.695Z",
        "updated_at": "2019-08-16T16:14:45.695Z"
    },
    {
        "id": 24,
        "title": "Armandale",
        "publication_year": 1865,
        "author_id": 10,
        "created_at": "2019-08-16T16:14:45.697Z",
        "updated_at": "2019-08-16T16:14:45.697Z"
    }
]```

**To GET a specific book by an author:**

`/api/v1/authors/<AUTHOR_ID>/books/<BOOK_ID>`

*Example request:*

`/api/v1/authors/10/books/24`

*Example response:*


```200 OK

[
    {
        "id": 24,
        "title": "Armandale",
        "publication_year": 1865,
        "author_id": 10,
        "created_at": "2019-08-16T16:14:45.697Z",
        "updated_at": "2019-08-16T16:14:45.697Z"
    }
]```

**To POST a new book by a specific author(author must exist in database):**

`/api/v1/authors/<AUTHOR_ID>/books`

*Example request:*

`/api/v1/authors/2/books`

REQURIRED PARAMETERS: 

```Headers:  "Content-Type": "application/json"

Body:
 {
  "title": <String>,
  "publication_year": <Integer>,
  "author_id": <author_id>
}
```

*Example response:*

```201 Created

{
    "id": 96
}```
