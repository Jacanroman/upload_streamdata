const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const fileupload = require('express-fileupload');
const FileController = require('./controllers/FileController');

const app = express();
const fileController = new FileController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

router.post('/subir-archivo', fileController.subirArchivo);

router.use(function(req, res) {
    res.status(404).json({
        error: true,
        message: 'Not Found'
    });
});

app.use('/api', router);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.render('index.html');
});

var port = 3000;
app.listen(port, function () {
    console.log('Server', process.pid, 'listening on port', port);
});

module.exports = app;

/* explanation 
What we have done is create the server. At the top of the file we have made a require of the module 'express-fileupload', which is essential to upload files.

We have included the class FileController, located in the file /controllers/FileController.js, In the function subirArchivoof this controller is where we will add the code in charge of uploading the file.

As for the route that will redirect the request to the controller, we have defined the route /api/subir-archivousing the following function:
router.post('/subir-archivo', fileController.subirArchivo);
/apiWe have added the prefix of the route using the following declaration:

app.use('/api', router);
Save this file, since next we will create the frontend code.

*/

