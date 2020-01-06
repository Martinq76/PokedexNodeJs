var app = require('express')(),
    server = require('http').createServer(app),
    mongodb = require('mongodb'),
    ejs = require('ejs');

app.get('/', (req, res) => {
    res.status(200).render('home.ejs');
})

.use((req, res, next) => {
    res.status(404).send('Oups... La page demandée n\'a pas été trouvée...');
});

server.listen(8080);

console.log('Server running at \'http://localhost:8080/\'');