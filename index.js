const express = require('express');
const multer = require('multer');

const upload = multer({ dest: 'public' })

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('add');
});

app.post('/add', upload.single('image'), (req, res) => {
    console.log(req.file.filename);
    res.send('Da nhan.');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
require('reload')(app);
