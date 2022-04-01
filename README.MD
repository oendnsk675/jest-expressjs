# Express with jest testing

The following is an example of using ExpressJs, Sequalize(ORM) using PostgreSQL as the database, then you can take a reference if you are just starting to migrate to express, this template includes middleware for authorization and authentication.
In this project I also include an example of integrated testing, using JEST and Supertest, which you can learn about that.


## Feature

- Signin
- Signup
- Create task
- Update task
- Authorization when delete and updating task
- Authentication using jwt (JSON Web Token)

## Getting Started

first install all modules
```sh
npm install
```

Next we call `db:create` to create a database
```sh
npx sequelize-cli db:create
```

Then we execute migration to create user migration, and task
```sh
npx sequelize-cli db:migrate
```

then we run our seeder which is in `./app/seeders`, so that there is our initial data
```sh
npx sequelize-cli db:seed:all
```

and we run the server so that it can be tested on postman or using insomnia
```sh
npm run serve
```


## For Testing
First, we create a database for testing
```sh
npm run db:create:test
```

then we can do testing
```sh
npm test
```

## API Spec

Here are the details of each endpoint

### Authentication

All API must use this authentication except sign in and sign up

Request :
- Header :
    - x-api-key : "your secret api key"

### Signup

Request :
- Method : POST
- Endpoint : `/api/v1/signup`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "string",
    "username": "string",
    "email": "string",
    "password": "string"
}
```

- Reponse :

```json
{
    "msg": "string",
    "data": {
        "id": "int",
        "name": "string"
    }
}
```

### Signin

Request :
- Method : POST
- Endpoint : `/api/v1/signin`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "email": "string",
    "password": "string"
}
```

- Reponse :

```json
{
    {
        "msg": "string",
        "key": "string"
    }
}
```

### Get All User

Request :
- Method : GET
- Endpoint : `/api/v1/users`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "msg": "Success retrieve data users",
    "data": [object]
}
```

### Get Detail User

Request :
- Method : GET
- Endpoint : `/api/v1/users/id`
- Header :
    - Accept: application/json
- Response :

```json 
{
    "msg": "Success retrieve detail user",
    "data": {
        "id": "int",
        "name": "string",
        "username": "string",
        "email": "string",
        "password": "string",
        "createdAt": "date",
        "updatedAt": "date",
        "Tasks": [
            {
                "id": "int",
                "title": "string",
                "description": "string",
                "userId": "int",
                "createdAt": "date",
                "updatedAt": "date"
            },
        ]
    }
}
```

### Update User

Request :
- Method : PUT
- Endpoint : `/api/v1/users/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "name": "string",
    "username": "string",
    "email": "string",
    "password": "string"
}
```

- Reponse :

```json
{
    "msg" : "string",
}
```

### Get All Task

Request :
- Method : GET
- Endpoint : `/api/v1/tasks`
- Header :
    - Accept: application/json
- Response :

```json 
{   
    "msg" : "string",
    "data" : [{
        "id": "int",
        "title": "string",
        "description": "string",
        "userId": "int",
        "createdAt": "date",
        "updatedAt": "date",
        "User": {
            "id": "int",
            "name": "string",
            "username": "string",
            "email": "string",
            "password": "string",
            "createdAt": "date",
            "updatedAt": "date"
        }
    }]
}
```

### Create Task

Request :
- Method : POST
- Endpoint : `/api/v1/tasks`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title": "string",
    "description": "string",
    "userId": "int"
}
```

- Reponse :

```json
{
    "msg" : "string",
    "data" : {
        "id": "int",
        "title": "string",
        "description": "string",
        "userId": "int",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

### Update Task

Request :
- Method : PUT
- Endpoint : `/api/v1/tasks/{id}`
- Header :
    - Content-Type: application/json
    - Accept: application/json
- Body :

```json 
{
    "title": "string",
    "description": "string",
    "userId": "int"
}
```

- Reponse :

```json
{
    "msg" : "string",
}
```

### Delete Task

Request :
- Method : DELETE
- Endpoint : `/api/v1/tasks/{id}`
- Header :
    - Accept: application/json

- Reponse :

```json
{
    "msg" : "string"
}
```


## License

MIT