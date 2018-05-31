# Sequelize 101
Code for my Sequelize 101 talk.

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

Install the Sequelize CLI (command line interface) globally

```bash
$ npm i -g sequelize-cli
```

#### Using the Sequelize CLI
One of the great things about Sequelize is that it comes with a command line interface that generates skeletal models and migrations for us to expand and customize. Sequelize adds some convention to the configuration-heavy Node environment to make our lives much easier.

Start by running `sequelize init` in your project’s root directory. This will add a bunch of directories and files to your project. For now, we’re interested in the models directory. Open models. You should find an index.js file that looks something like this:

```js
'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

```

This model is the root model that will allow Sequelize to read all the other models you make. It connects your app to the database by way of the lowercase `sequelize` instance of the `Sequelize` constructor, which, for now, reads the connection configuration set in the config file, places it in the db object, and exports that connection along with all of your models to be read by other files in your app (*module.exports = db*)  That db variable also includes the Sequelize constructor itself.

#### Sequelize CLI Part II: Generating Models
We’ve got our index file connecting our connection and our models. Now, to generate models and migrations: on the CLI, type:

```bash
$ sequelize model:create --name User --attributes "name:string, email:string, password:string, role:string"
```

This will create an incomplete User model and an incomplete User migration that we will flesh out. Let’s follow suit with the Company and Product models:

```bash
$ sequelize model:create --name Company --attributes "name:string, founded:integer, address:string"
```

```bash
$ sequelize model:create --name Product --attributes "name:string, price:integer, description:string"
```

And, like magic, you should have several files that weren’t there before in your `models` and `migrations` directories. The default for generated Sequelize files is camelCase. However, you can specify snake_case by adding the `--underscored` flag, and you can keep Sequelize from automatically pluralizing the table name by adding `--freeze-table-names`.

Now we’re going to edit these files so that they fully reflect the relationships between the data that we intend and validate our data as it’s saved (or not saved if invalid).

#### Editing Models and Migrations (Not Including Associations/Foreign Keys)
Let’s start with the User model file. The generated file reads as follows:

```js
'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  })
  return User
}

```

We want to make a few changes here. What are they? Well, first it’s important to understand that Sequelize automatically adds three columns to each table: a unique id that acts as the primary key for the table, and createdAt and updatedAt columns, which are self-explanatory. By default, the id column will start at 1 and assign numbers in ascending order. This pattern is okay for small projects, but it lacks sophistication. Deleted rows will leave obvious gaps in the numbering, rows in different tables will have the same ids, and the unique ids won’t all have the same number of digits. So we’re going to alter the id column to assign a UUID to each row. Sequelize has a UUID datatype that will make this a snap.

Additionally, we want to specify that each email must be unique to the database and each User must have a password.

So, make the following changes:

```js
'use strict'

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  })
  return User
}

```

Now we need to edit the boilerplate User migration to reflect the changes we’ve made to the model in the table’s structure. Notice that while the id, createdAt, and updatedAt columns weren’t present in the original boilerplate User model, they are in the boilerplate User migration. They’re not in the model because the Sequelize node package specifies them as a default part of each model, but they have to be in the migration so that the columns are created in the table. Remember, SQL databases can’t save data unless you’ve previously created columns for that data. Here is the generated boilerplate User migration:


```js
'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}

```


And here is the migration edited to reflect the changes in the User model.


```js
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users')
  }
}
```

*... to be continue*


### Developing

1. Run `npm install` to install server dependencies.
2. Run `npm run dev` to start the development server.
3. Open a new tab of the terminal and run: `node example/seed.js`
3. Open browser `http://localhost:3000/api/users`.


## Contributors

[Cristian Moreno](http://khriztianmoreno.com) - *FullStack Javascript Developer*
