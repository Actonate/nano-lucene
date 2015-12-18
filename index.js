module.exports = (function() {

  var _lucene = function(_nano, _db, _config) {

    var db = _db;
    var nano = _nano;

    var config = _config || {
      fragment: '_fti'
    };

    var _search = function(_designDoc, _viewName, _params, _callback) {
      var dbName = db.config.db;

      if (typeof _params === 'function') {
        _callback = _params;
        _params = {};
      }

      var viewPath = config.fragment + '/local/' + dbName + '/_design/' + _designDoc + '/' +
        _viewName;

      var req = {
        uri: viewPath,
        method: 'GET',
        path: viewPath,
        qs: _params
      };

      return nano.relax(req, _callback);
    };

    return {
      search: _search
    };
  };
  return _lucene;
})();
