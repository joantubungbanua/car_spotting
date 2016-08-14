var url = '';

function handleChange() {
  url = document.getElementById('turd').value;
  console.log(url);
}

function handleClick() {
  var preview = document.getElementById('preview');
   preview.src = url;
   Clarifai.initialize({
     'clientId': 'kEpaa0LCEYjynq5xiaaRFz85d6MvhHShxLRZBAnr',
     'clientSecret': '4Zd7XFJ1syq7U51sv2cd5JEeEPHx1zAWZNjNR0-z',
     'apiEndpoint': 'https://api2-prod.clarifai.com'
   });
   Clarifai.attachModelOutputs('b7c0d1512d9d4260a832f17b1f9f8925', {
     'inputs': [
       {
         "data": {
           'image': {
             'url': url
           }
         }
       }
     ]
   }).then(
     function(response) {
       console.log(response.outputs[0].data.tags[0].value);
       if (response.outputs[0].data.tags[0].value > 0.60){
         var x = document.createElement("IMG");
       x.setAttribute("src", "http://animalsbreeds.com/wp-content/uploads/2014/07/Pug-19.jpg");
       x.setAttribute("width", "304");
       x.setAttribute("height", "228");
       x.setAttribute("alt", "puppy");
       document.body.appendChild(x);
       var audio = new Audio('yay.mp3');
audio.play();
       };
     },
     function(err) {
       console.error(err);
     }
   );
}
