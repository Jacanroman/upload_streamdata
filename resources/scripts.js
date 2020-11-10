const subirImagen= event => {
    const archivos = event.target.files;
    const data = new FormData();
  
    data.append('archivo', archivos[0]);
  
    fetch('/api/subir-archivo', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('resultado').innerHTML = 'El archivo ' + data.path + ' se ha subido correctamente.';
    })
    .catch(error => {
      console.error(error);
    });
  }
  
  document.querySelector('#subir_archivo').addEventListener('change', event => {
      subirImagen(event);
  });


  /*

  In the last block of code we have registered an event changefor the input that we use to upload the file. In this event we execute the function subirImagen, which receives the click event itself as a parameter, from where we will have access to the selected file.

What we do in the function subirImagenis to obtain the selected file, located in the array event.target.files. Then we create a FormData object and assign the selected file to it. Finally we use the function fetchto send a POST request to the route /api/subir-archivothat we have created on the server. If you do not know the Fetch API, you can consult the following tutorial, where I explain what is a how to use Fetch in JavaScript .

Then we check if the file submission has been completed successfully, printing the resultadofile path in the field if it has been uploaded correctly, or displaying an error in the console otherwise. The route we return to the property path.

*/