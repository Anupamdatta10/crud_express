var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});


connection.connect((err) => {
    if (!err)

        console.log('successfully connected');
    else
        console.log("error in connection");

});
module.exports = connection