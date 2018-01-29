var MongoClient = require('mogodb').MongoClient;
var url = "mogodb://localhost:27017/chattingdb"

MongoClient.connect(url, function(err, db){
  if (err) throw err;
  console.log("Database created");
  db.close();

});
