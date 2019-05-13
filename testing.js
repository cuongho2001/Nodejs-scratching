console.log(' This will query info in testInfo table.');

var mysql = require('mysql');
const express = require('express');
const app = express();
const router = express.Router();

const url = require('url');

const port = process.env.port || 8081;

var connection = mysql.createConnection({
    host     : 'inobotmysql.ckiuwv69al91.us-east-1.rds.amazonaws.com',
    user     : 'inobotmysql',
    password : 'zaq1234%',
    port     : '3306',
    database : 'inobotmysql'
});

// all routes prefixed with /test
app.use('/test', router);

// set the server to listen on port PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

router.get('/', (req, res) =>  {
 
    var message = ' You are now having access to testInfo table in inobotmysql. Eskeetit';
    res.send(message);
  
    });

router.get('/query', (req,res) => {
    var q = url.parse(req.url, true).query;
    var category = q.category;
    var sql = `SELECT * FROM testInfo WHERE category = "${category}"`;
    connection.query(sql, function(err,result) {
        if (err) throw err;
        res.send(result);
    });
    
});