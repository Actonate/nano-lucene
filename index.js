module.exports = (function(){

	var _lucene = function(_nano, _db, _config){

		var db = _db;
		var nano = _nano;

		var config = _config || { fragment: '_fti' };

		var _search = function(_design_doc, _view_name, _params, _callback) {
		  var db_name = db.config.db;

	      if (typeof _params === 'function') {
	        _callback = _params;
	        _params = {};
	      }

	      var view_path = config.fragment + '/local/' + db_name + '/_design/' + _design_doc + '/'  + _view_name;
	      console.log(view_path);

	      var req = {
			uri: view_path,
			method: 'GET',
			path: view_path,
			qs: _params
  		  };

	      return nano.relax(req, _callback);

	    }

		return {
			search: _search
		}


	}

	return _lucene;
})();