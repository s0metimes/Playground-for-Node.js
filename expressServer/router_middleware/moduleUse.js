var express = require('express');
var modularizedApp = require('./expressModularize');

app = express();

app.use('/dog', modularizedApp);
app.listen(3000, function() {
    console.log('started');
});
