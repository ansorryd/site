const express = require('express');
const fs = require('fs')
const path = require('path');

const app = express();

let config = JSON.parse(fs.readFileSync('./config.json'))


app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (request, response) => {
    return response.sendFile('index.html', {root: '.'});
});

app.get('/contact', (request, response) => {
    return response.sendFile('public/contact.html', {root: '.'});
});

console.clear()
app.listen(config.port, () => console.log(`App listening at http://localhost:${config.port}`));