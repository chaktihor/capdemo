const express = require('express');
const app = express();
const port = 8000;

/*
app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
});

app.get('/custLogin', (req, res) => {
    res.sendFile('./custLogin.png', { root: __dirname });
});


app.get('/imagelogin', (req, res) => {
    res.sendFile('./imagelogin.png', { root: __dirname });
});*/

app.use('/bot',express.static('bot'));
app.listen(port, () => console.log(`listening on port ${port}!`));
