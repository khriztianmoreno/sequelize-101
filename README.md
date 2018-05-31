# Sequelize 101
> Code for my Sequelize 101 talk.

Hello, and welcome! This tutorial covers the basics of CRUD operations and simple examples using the Node ORM Sequelize. We will use Express.js to build out an API, but the focus here is Sequelize. I will assume you have PostgreSQL installed on your machine, and that you're using Node version `^8.10`

- Built with Node.js and Express

## Express Router and Routes

| Route           | HTTP Verb | Description                          |
| --------------- | --------- | ------------------------------------ |
| /api/users      | GET       | Get list of users                    |
| /api/users      | POST      | Creates a new user                   |
| /api/users/:id  | GET       | Get a single user                    |
| /api/users/:id  | DELETE    | Deletes a user                       |
| /api/users/me   | GET       | Get my info                          |

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) 
- [PostgreSQL](https://www.postgresql.org/) 

## Usage

### Run basic examples

#### SYNC Data Base
1. Run `npm install` to install server dependencies.
2. Run `npm run dev` to start the development server and sync db
3. After the terminal shows: `info: Express server listening on 3000, in development mode` stop the demon

#### Run Examples

```bash
# Move to example folder
$ cd examples

# Fill the database with the sample data
$ node seed.js

# Run any of the examples
node 1.js

node sum.js
```

### Workshop
If you want to do the workshop, in the [repo wiki](https://github.com/khriztianmoreno/sequelize-101/wiki) you can find it.


### Developing

1. Run `npm install` to install server dependencies.
2. Run `npm run dev` to start the development server.
3. Open a new tab of the terminal and run: `node example/seed.js`
3. Open browser `http://localhost:3000/api/users`.


## Contributors

[Cristian Moreno](http://khriztianmoreno.com) - *FullStack Javascript Developer*
