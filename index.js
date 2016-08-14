var Clarifai = require('./clarifai-2.0.2/index');

Clarifai.initialize({
  'clientId': 'kEpaa0LCEYjynq5xiaaRFz85d6MvhHShxLRZBAnr',
  'clientSecret': '4Zd7XFJ1syq7U51sv2cd5JEeEPHx1zAWZNjNR0-z',
  'apiEndpoint': 'https://api2-prod.clarifai.com'
});
/*
Clarifai.addInputs([
  {
    "data": {
      "image": {
        "url": "http://s1.1zoom.net/big3/985/431610-Kysb.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": true
        }
      ]
    },
    "id": "some-id9"
  },
  {
    "data": {
    "image": {
      "url": "http://67.media.tumblr.com/d7f7b13561e1e144c7739579fa3ff9ff/tumblr_ner7fkkBjt1qb8j5ro1_1280.jpg"
    },
    "tags": [
      {
        "concept": {
          "id": "frontcar"
        },
        "value": true
      }
    ]
  },
  "id": "some-id8"
},
  {
    "data": {
      "image": {
        "url": "http://67.media.tumblr.com/d7f7b13561e1e144c7739579fa3ff9ff/tumblr_ner7fkkBjt1qb8j5ro1_1280.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": true
        }
      ]
    },
    "id": "some-id7"
  },

  {
    "data": {
      "image": {
        "url": "http://img2.goodfon.su/original/2048x1536/2/78/dodge-charger-r-t-daytona-4297.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": true
        }
      ]
    },
    "id": "some-id6"
  },
  {
    "data": {
      "image": {
        "url": "http://imgview.info/download/20150625/car-parking-street-1680x1050.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": true
        }
      ]
    },
    "id": "some-id5"
  },
  {
    "data": {
      "image": {
        "url": "http://imgview.info/download/20150625/car-parking-street-1680x1050.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": true
        }
      ]
    },
    "id": "some-id4"
  },
  {
    "data": {
      "image": {
        "url": "https://s-media-cache-ak0.pinimg.com/736x/d7/2a/04/d72a044df1d21e9e79f36bdaeaf568e2.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": false
        }
      ]
    },
    "id": "some-id3"
  },
  {
    "data": {
      "image": {
        "url": "http://i.imgur.com/zANRoHJ.jpg"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": false
        }
      ]
    },
    "id": "some-id2"
  },
  {
    "data": {
      "image": {
        "url": "http://blog.birdbgone.com/blog/wp-content/uploads/2014/12/1cba4b9178f67acfbabdbff0500872a41.png"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": false
        }
      ]
    },
    "id": "some-id1"
  },
  {
    "data": {
      "image": {
        "url": "https://scontent-lga3-1.xx.fbcdn.net/v/t34.0-12/14012100_697843820367811_1066186643_n.jpg?oh=2efc136f57083516fd388f3db6067681&oe=57B2218B"
      },
      "tags": [
        {
          "concept": {
            "id": "frontcar"
          },
          "value": false
        }
      ]
    },
    "id": "some-id0"
  }
]).then(
  function(response) {
    console.log('input: ', response);
  },
  function(err) {
    console.error(err);
  }
);

*/

/*
Clarifai.createModel({
  'name': 'is_it_car',
  'concepts': [
    {
      'id': 'frontcar'
    }
  ]
}).then(
  function(response) {
    console.log('created model ', response);
  },
  function(err) {
    console.error(err);
  }
);
*/
/*
Clarifai.createModelVersion('b7c0d1512d9d4260a832f17b1f9f8925').then(
  function(response) {
    console.log('model version ', response);
  },
  function(err) {
    console.error(err);
  }
);
*/

Clarifai.attachModelOutputs('b7c0d1512d9d4260a832f17b1f9f8925', {
  'inputs': [
    {
      "data": {
        'image': {
          'url': 'https://scontent-lga3-1.xx.fbcdn.net/v/t34.0-12/14017751_697843860367807_2143089643_n.jpg?oh=3c55179a8cfcf99dfd9c39aadbdc9095&oe=57B1242B'
        }
      }
    }
  ]
}).then(
  function(response) {
    console.log(response.outputs[0].data.tags[0].value);
  },
  function(err) {
    console.error(err);
  }
);

///model id is bd131e25b0dd4ce59264939e154a6d21
