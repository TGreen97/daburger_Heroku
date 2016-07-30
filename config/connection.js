var mysql = require('mysql');

var connection = mysql.createConnection({
  /* host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db' */
  port: 3306,
  host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: 'jrd1mkj3dxant3dp',
  password: 'ggitjqr43tj01a84',
  database: 'dkcp360a8y8sgcjn'
});


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;