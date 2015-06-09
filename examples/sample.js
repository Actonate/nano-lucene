var config = {
	username: '',
	password: '',
	host: 'localhost',
	port: 5984,
	db: 'alice'
};


if(config.username && config.password){
	var db_url = 'http://' + config.username + ':' + config.password + '@' + config.host + ':' + config.port;	
}
else{
	var db_url = 'http://' + config.host + ':' + config.port;	
}

console.log(db_url);

var nano = require('nano')(db_url);
var db = nano.db.use(config.db);
var nano_lucene = require('..')(nano, db, { fragment: '_fti' }); //require the plugin

//Check if connecting
db.get('foo', function(err, body) {
  if (!err) {
    console.log(body);
  }
  console.log("CONNSUCCESS");
});


//Fire the search query
nano_lucene.search('user', 'by_name', { q: 'merchant' }, function(err, body){
	if(err){
		console.log(err);
		return;
	}
	console.log(body);
});