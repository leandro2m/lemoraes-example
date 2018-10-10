const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const cors = require('cors');


// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/app'));
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(cors({origin: '*'}));

// Start the app by listening on the default
// Heroku port

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/failure', function(req, res) {
    console.log('Ihhhh deu ruim');
    process.exit();
    
  });
app.get('*', function(req, res) {
    res.redirect('/');
  });
app.listen(process.env.PORT || 8088);
console.log('Listening port 8088');