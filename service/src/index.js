
const keys = require('./keys.js')
const express = require('express')
const mysql = require('mysql')

const app =  express();


app.get('/api/userId', function(req, res, next) {
     console.log("Getting userId ")
     var connection = mysql.createConnection(keys.sqlConfig);
     connection.connect();
     console.log("Db connection created, volume attached")
     connection.query('SELECT 5 + 1 AS solution', function (error, results, fields) {
       if (error) throw error;
        console.log('Sending response')
        res.send('The solution is: '+ results[0].solution);
     });
     console.log("Closing db connection")
     connection.end();
});

app.listen('8084', () => {
  console.log('Listening on 8084')
});
