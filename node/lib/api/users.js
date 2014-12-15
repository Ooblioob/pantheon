// Generated by IcedCoffeeScript 1.8.0-c
(function() {
  var couch_utils, isInt, user_db, users;

  couch_utils = require('../couch_utils');

  users = {};

  user_db = couch_utils.nano_admin.use('_users');

  isInt = function(s) {
    return String(parseInt(s)) === s;
  };

  users.get_users = function(req, resp) {
    var resource, rsrcs_id, _ref;
    _ref = req.query;
    for (resource in _ref) {
      rsrcs_id = _ref[resource];
      break;
    }
    if (resource) {
      if (isInt(rsrcs_id)) {
        rsrcs_id = parseInt(rsrcs_id);
      }
      return user_db.viewWithList('base', 'by_resource_id', 'get_doc', {
        include_docs: true,
        key: [resource, rsrcs_id]
      }).pipe(resp);
    } else {
      return couch_utils.nano_admin.request({
        db: '_users',
        path: '/_design/base/_rewrite/users'
      }).pipe(resp);
    }
  };

  users.remove_member = function(req, resp) {};

  module.exports = users;

}).call(this);
