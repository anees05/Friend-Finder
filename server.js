var express = require('express');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 8040;

app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

app.listen(PORT, function () {
    console.log('Listening on PORT: ' + PORT);
});