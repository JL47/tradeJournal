const { clear } = require('console');
const express = require('express');
const path = require('path');
const app = express();

// const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/dist/trade-journal')));
app.set('views', path.join(__dirname, 'dist/trade-journal'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/trade-journal/index.html'));
   });
   
   app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port`);
   });
