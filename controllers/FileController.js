class FileController
{
  subirArchivo = async (req, res, next) =>
  {
    const archivo = req.files.archivo;
    const fileName = archivo.name;
    const path = __dirname + '/../uploads/' + fileName;

    try {
      archivo.mv(path, (error) => {
        if (error) {
          console.error(error);
          res.writeHead(500, {
            'Content-Type': 'application/json'
          });
          res.end(JSON.stringify({ status: 'error', message: error }));
            return;
          }
          return res.status(200).send({ status: 'success', path:'/uploads/' + fileName });
       });
     } catch (e) {
       res.status(500).json({
         error: true,
         message: e.toString()
       });
     }
  }
}

module.exports = FileController;

/*
We have created a class called FileControlleras a controller, in which we have defined the function subirArchivo.

The first thing we do is obtain the file that we have sent, which should be in the variable req.files.archivo, since it archivowas the name we have given it in the frontend code. Now we can get the name of the file, which will be in the variable archivo.name.

Next we have defined the path or pathin which we are going to copy the file and then, using the function archivo.mv, we copy the file to that path.

In case the file has been copied successfully, we will send the response back in JSON format:

return res.status(200).send({ status: 'success', path:'/uploads/' + fileName });
Otherwise, we return an error.
*/