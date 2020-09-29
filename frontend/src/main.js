const keys = require('./keys.js')
const express = require('express')
const http = require('http')

const app = express();

app.get('/viewSql', function(req, response) {
      var body = '';
     http.get(keys.apiServerConfig, function(res) {
      res.on('data', function(chunk) {
        console.log('Data event called!!!'+chunk)
        response.write(chunk)
      });
      res.on('end', function() {
         console.log('End event called!!!')
         response.end()
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
    console.log('End of request reached')
})

app.listen('9094', function(err) {
 console.log('Listening on 9090 port')
})