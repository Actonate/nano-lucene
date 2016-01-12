var lucene = function(nanoAdapter, options) {
  if (!nanoAdapter) {
    throw new Error('Required Nano Adapter not Found');
  }
  var nano = nanoAdapter;
  var database = options && options.db ? options.db : null;
  var fragment = options && options.fragment ? options.fragment : '_fti';

  var _search = function(designDoc, viewName, options, callback) {

    if (!options) {
      throw new Error('Required Options: Design Doc and View');
    }

    if (!designDoc) {
      throw new Error('Required Options: Design Document');
    }

    if (!viewName) {
      throw new Error('Required Options: View Name');
    }

    var queryString = options.queryString ? options.queryString : '';

    var targetDatabase = options.db ? options.db : database;

    if (!targetDatabase) {
      throw new Error('Required: Database Name at Init or Search');
    }

    var viewPath = fragment + '/local/' + targetDatabase + '/_design/' +
      designDoc + '/' + viewName;

    var req = {
      uri: viewPath,
      method: 'GET',
      path: viewPath,
      qs: queryString
    };

    return nano.relax(req, _callback);
  };

  return {
    search: _search
  };

};

module.exports = lucene;
