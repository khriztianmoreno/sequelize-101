'use strict';

// https://github.com/Starcounter-Jack/JSON-Patch
const jsonpatch = require('fast-json-patch')

const { Company, User } = require('../../sqldb');

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if(entity) {
      return res.status(statusCode).json(entity);
    }
    return null;
  };
}

function patchUpdates(patches) {
  return function(entity) {
    try {
      jsonpatch.apply(entity, patches, true);
    } catch(err) {
      return Promise.reject(err);
    }

    return entity.save();
  };
}

function removeEntity(res) {
  return function(entity) {
    if(entity) {
      return entity.destroy()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if(!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Get list of companies
 */
function index(req, res) {
  return Company.findAll({include: [User]})
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Creates a new company
 */
function create(req, res) {
  return Company.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

/**
 * Get a single Company
 */
function show(req, res, next) {
  const { id } = req.params;

  return Company.findAll({
    where: { id },
    include: [User]
  })
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Upserts the given Thing in the DB at the specified ID
function upsert(req, res) {
  const { id } = req.params;

  if(req.body.id) {
    Reflect.deleteProperty(req.body, 'id');
  }

  return Company.upsert({ where: { id } })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Updates an existing Company in the DB
function patch(req, res) {
  const { id } = req.params;

  if(req.body.id) {
    Reflect.deleteProperty(req.body, 'id');
  }

  return Company.find({ where: { id } })
    .then(handleEntityNotFound(res))
    .then(patchUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Deletes a Company
 * restriction: 'admin'
 */
function destroy(req, res) {
  const { id } = req.params;

  return Company.find({ where: { id } })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


module.exports = {
  index,
  show,
  create,
  destroy,
  upsert,
  patch
};
