const cors = require('cors')
const path = require('path');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const route = require('./routes/router');
const auth = require('./middleware/auth');
// const logger = require('./logger')
const httpLogger = require('./httpLogger')
const mongoose = require('mongoose')

mongoose.plugin(require('./app/utils/diff-plugin'))


require('dotenv').config()

dotenv.config({ path: './config/.env' });

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(xss());

app.use(mongoSanitize());

app.use(cors());

// //Local storage of files
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};


app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type: application/json', 'Accept: application/json', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});



// const mongoose = require('mongoose')

// mongoose.plugin(require('./app/utils/diff-plugin'))

const router = express.Router();

app.use(auth);

module.exports = router;

app.use(route);




app.use(httpLogger)

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!')
})

// app.get('/boom', (req, res, next) => {
//   try {
//     throw new Error('Wowza!')
//   } catch (error) {
//     logger.error('Whooops! This broke with error: ', error)
//     res.status(500).send('Error!')
//   }
// })

// app.get('/errorhandler', (req, res, next) => {
//   try {
//     throw new Error('Wowza!')
//   } catch (error) {
//     next(error)
//   }
// })



app.use(logErrors);

app.use(errorHandler);

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
function errorHandler (err, req, res, next) {
  res.status(500).send('Error!')
}

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.code || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@smarthotel.i3gmt.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    autoIndex: true
})
    .then(result => {
        const port = process.env.PORT || 3000;
        const server = require('http').createServer(app);
        const io = require('./socket/socket').init(server, {
        });
        io.on('connection', socket => {
            console.log('Client connected');
            console.log(socket.id)
            io.emit('transfer_init', 'User connected')
        });
        server.listen(port);
        console.log(`Your server available at http://localhost:${port}`)
    })
    .catch(err => console.log(err));
