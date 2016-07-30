var mysql = require('mysql');

var connection = mysql.createConnection({
  /* host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db' */
  port: 3306,
  host: process.env.db_host || 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user: process.env.db_user || 'jrd1mkj3dxant3dp',
  password: process.env.db_pw || 'ggitjqr43tj01a84',
  database: process.env.db || 'dkcp360a8y8sgcjn'
});


connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;