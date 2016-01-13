var lucene = function(nanoAdapter, options) {
  if (!nanoAdapter) {
    throw new Error('Required Nano Adapter not Found');
  }
  var nano = nanoAdapter;
  var database = options && options.db ? options.db : null;
  var fragment = options && options.fragment ? options.fragment : '_fti';

  var _search = function(designDoc, viewName, requestParams, callback) {

    if (!requestParams) {
      throw new Error('Required Request Parameters');
    }

    if (!designDoc) {
      throw new Error('Required Options: Design Document');
    }

    if (!viewName) {
      throw new Error('Required Options: View Name');
    }

    var viewPath = fragment + '/local/' + database + '/_design/' +
      designDoc + '/' + viewName;

    var req = {
      uri: viewPath,
      method: 'GET',
      path: viewPath,
      qs: requestParams
    };

    return nano.relax(req, callback);
  };

  return {
    search: _search
  };

};

module.exports = lucene;
