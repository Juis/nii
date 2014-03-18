module.exports = function(app) {
  
  // Dummy db.
  var users = [
    {name: 'Jarrad Seers', email: 'jarrad@jarradseers.com'},
    {name: 'Bob Jones', email: 'bob@example.com'}
  ];

  var User = {};
  
  // Simple find user by id method.
  User.findById = function(id, callback) {
    callback(users[id]);
  };

  return User;
}
/*var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    login: String,
    senha: String
});
 
module.exports = mongoose.model('Usuario', usuarioSchema);*/