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

module.exports = { upload };
