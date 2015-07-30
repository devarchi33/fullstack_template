/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /testdoc              ->  index
 * POST    /testdoc              ->  create
 * GET     /testdoc/:id          ->  show
 * PUT     /testdoc/:id          ->  update
 * DELETE  /testdoc/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Testdoc = require('./testdoc.model');

// Get list of testdocs
exports.index = function(req, res) {
  Testdoc.find(function (err, testdocs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(testdocs);
  });
};

// Get a single testdoc
exports.show = function(req, res) {
  Testdoc.findById(req.params.id, function (err, testdoc) {
    if(err) { return handleError(res, err); }
    if(!testdoc) { return res.status(404).send('Not Found'); }
    return res.json(testdoc);
  });
};

// Creates a new testdoc in the DB.
exports.create = function(req, res) {
  Testdoc.create(req.body, function(err, testdoc) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(testdoc);
  });
};

// Updates an existing testdoc in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Testdoc.findById(req.params.id, function (err, testdoc) {
    if (err) { return handleError(res, err); }
    if(!testdoc) { return res.status(404).send('Not Found'); }
    var updated = _.merge(testdoc, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(testdoc);
    });
  });
};

// Deletes a testdoc from the DB.
exports.destroy = function(req, res) {
  Testdoc.findById(req.params.id, function (err, testdoc) {
    if(err) { return handleError(res, err); }
    if(!testdoc) { return res.status(404).send('Not Found'); }
    testdoc.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}