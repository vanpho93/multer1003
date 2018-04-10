const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    res.send('Da nhan.');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
require('reload')(app);
