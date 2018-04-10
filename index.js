const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'public'),
    filename: (req, file, cb) => {
        const dotIndex = file.originalname.lastIndexOf('.');
        const fileExtension = file.originalname.substring(dotIndex + 1);
        cb(null, `${Date.now()}.${fileExtension}`);
    } 
});

function fileFilter(req, file, cb) {
    const { mimetype } = file;
    if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
        return cb(new Error('Loi'));
    }
    cb(null, true);
}

const limits = { fileSize: 102400 };

const upload = multer({ storage, fileFilter, limits });

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('add');
});

app.post('/add', (req, res) => {
    upload.single('image')(req, res, error => {
        if (error) return res.send(error.message);
        console.log(req.file.filename);
        console.log(req.body);
        res.send('Da nhan.');
    });
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));
require('reload')(app);
