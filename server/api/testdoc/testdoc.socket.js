/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Testdoc = require('./testdoc.model');

exports.register = function(socket) {
  Testdoc.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Testdoc.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('testdoc:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('testdoc:remove', doc);
}