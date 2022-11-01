const express = require('express');
const port = require('./config.json');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/public')));

app.get('/', (request, response) => {
    return response.sendFile('index.html', 'changelog.html', {root: '.'});
});

app.get('/changelog', (request, response) => {
    return response.sendFile('public/changelog.html', {root: '.'});
});

app.listen(port, () => console.log(`App listening at http://localhost${port}`));
app.listen(port, () => console.log(`App listening at http://localhost${port}`));
