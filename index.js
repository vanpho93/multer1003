const express = require('express');
const { upload } = require('./upload');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    upload.single('image')(req, res, error => {
        if (error) return res.send(error.message);
        if (req.file) console.log(req.file.filename);
        console.log(req.body);
        res.send('Da nhan.');
    });
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
require('reload')(app);
