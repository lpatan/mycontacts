   //setup ===================
	var express  = require('express');
    var app      = express();                   // create our app w/													// express
    var morgan = require('morgan');             // log requests to the console
												// (express4)
    var bodyParser = require('body-parser');    // pull information from HTML
												// POST (express4)
    var fs = require('fs');

    // configuration =================
    app.use(express.static('../main'));
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

    // listen (start app with node server.js)
	// ======================================
    app.listen(3000);
    console.log("App listening on port 3000");

   app.get('/service/item/', function(req, res) {
       var data = fs.readFileSync('testJson/item-data.json', 'utf8');
       var obj = JSON.parse(data);
       res.json(obj);
   });
