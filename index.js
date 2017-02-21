var mysql = require('mysql');
var fs = require('fs');
var userInput = process.argv[2];
var sqlQueries = JSON.parse(fs.readFileSync("config/sql.json"));
var showHelp = require('./helpers/show-help');

switch (userInput) {
    case 'help':
        showHelp();
        break;
    case '1':
      performQuery(sqlQueries.q1);
        break;
    case '2':
        performQuery(sqlQueries.q2);
        break;
    case '3':
        performQuery(sqlQueries.q3);
        break;
    case '4':
        performQuery(sqlQueries.q4);
        break;
    case '5':
        performQuery(sqlQueries.q5);
        break;
    case '6':
        performQuery(sqlQueries.q6);
        break;
    default:
        showHelp();
}

function performQuery(query) {
    var connectionCfg = JSON.parse(fs.readFileSync("config/connect.json"));
    
    var connection = mysql.createConnection({
        host: connectionCfg.host,
        user: connectionCfg.user,
        password: connectionCfg.password,
        port: connectionCfg.port,
        database: connectionCfg.database
    });
    connection.connect(function(err) {
        if (err) {
            console.log("Error connecting: " + err.stack);
            return;
        }
    });
    connection.query(query, function(error, results, fields) {
        console.log(results);
    });
    connection.end();
}

