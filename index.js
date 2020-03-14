var AWS = require('aws-sdk');

AWS.config.loadFromPath('./credentials.json')
AWS.config.update({region: "us-east-1"});

var params = {
    Image : {
        S3Object: {
            Bucket: "imagepvideo",
            Name: "jooker.jpg"
        }
    }
};

const rekognition = new AWS.Rekognition();


rekognition.detectLabels(params,function(err,data){
    if(err) console.log(err, err.stack)
    else console.log(data)
})
//rekognition.recognizeCelebrities


/*var AWS = require('aws-sdk');
var uuid = require('uuid');

AWS.config.update({
    accessKeyId: 'ASIAVCRRTJEFLFLW7IXD',
    secretAccessKey: 'dSR2XasFqi2qcdiUyR+DGHuMaX/U1GeAZcMv5Eju',
    sessionToken: 'FwoGZXIvYXdzEHsaDOX7nqgENuQlel2ILSLOAS17Y+VKkpgU4vSW2Is+WtBlqEfym+dDSl7g6ojLoapewNZf5VGJRL8jUhRGlmLjJMmg/lgK+7L0DQ2PJ8LbFgxPDAIBbLGXjNmqsk4NnKBLZi31PrdK/oB8p8R/4nYPJ2Mp/E4FS/MIY9YuOEcNPPu85r9gFiIdGmT9XtWAZnjJnN2C+xtje7AqjRTuC4JecewaRB3KVReygJUroPETFMz1v1rYKgy2o8/7eZMRFlyKGt2OJ5TCpEwH7s80WWGRtpqXhsbGvDCa0fmp/WklKIvesPMFMi0g2y7DHFCcMcuvHJjepPnSeQR1+CrQeTFdTYqCzsDpCxcX9MIsSixf1okLNwc=',
    region: 'us-east-1'
});
// Create unique bucket name
var bucketName = 'imagepvideo' + uuid.v4();
// Create name for uploaded object key
var keyName = '~/Desktop/reconocimiento/hello_world.txt';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();


// Handle promise fulfilled/rejected states
bucketPromise.then(
  function(data) {
    // Create params for putObject call
    var objectParams = {Bucket: bucketName, Key: keyName, Body: 'Hello World!'};
    // Create object upload promise
    var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
    uploadPromise.then(
      function(data) {
        console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
      });
}).catch(
  function(err) {
    console.error(err, err.stack);
});*/