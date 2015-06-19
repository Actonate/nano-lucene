# nano-couchdb-lucene
couchdb-lucene plugin for nano

```
var nano = require('nano')(db_url);
var db = nano.db.use(config.db);
var nano_lucene = require('..')(nano, db, { fragment: '_fti' }); //require the plugin

//Fire the search query
nano_lucene.search('user', 'by_name', { q: 'merchant' }, function(err, body){
	if(err){
		console.log(err);
		return;
	}
	console.log(body);
});
```
