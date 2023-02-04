const express = require('express');

const app = express();
const cors = require('cors');
const socketio = require("socket.io")
const dotenv = require('dotenv');
const connectDB = require('./database/connect');
const manageToken = require('./ManageToken')
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + '.wav')
  }
});
const upload = multer({ storage });

const token = manageToken()

const executeModel = require('./executeModel')

console.log("THIS IS TOKEN : " + token);

dotenv.config()

const PORT = process.env.PORT || 8080;

const URL = process.env.DATABASE_URL;

connectDB(URL);



app.use(cors())

app.use(express.json());

const expressServer = app.listen(PORT, () => {
    console.log("Server is running on PORT : " + PORT);
})

app.post('/audio/upload', upload.single('audioFile'), (req, res) => {
executeModel(req.file.path).then(response => console.log(response)).catch(err => console.log(err))
    res.json({ success: true });
})

const io = socketio(expressServer, {
    cors : {
        origin : "http://localhost:3000/"               
    }
})