 // Configure a few settings and attach camera
 Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
   });
   Webcam.attach( '#my_camera' );
  
  function take_snapshot() { 
   // take snapshot and get image data
   Webcam.snap( function(data_uri) {
   // display results in page
   document.getElementById('results').innerHTML = 
    '<img id="t" src="'+data_uri+'"/>';
    console.log(data_uri);
   });
  }