const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.get('/',(req,res)=>res.json({message:'Hola'}))



/*fetch('http://localhost:3000/')
.then(response => response.json())
.then(data => console.log(data))*/
let result = "";
let response1 = new Object();
let response2 = new Object();
let response3 = new Object();
let response4 = new Object();
var AWS = require('aws-sdk');;
AWS.config.loadFromPath('./credentials.json')
AWS.config.update({ region: "us-east-1" });

let x = ["jooker.jpg", "fc.jpg", "Mark.jpg", "reyleon.jpeg"];

for (let index = 0; index < x.length; index++) {

    var params = {
        Image: {
            S3Object: {
                Bucket: "imagepvideo",
                Name: x[index]
            }
        }
    };

    const rekognition = new AWS.Rekognition();


    rekognition.detectLabels(params, function (err, data) {
        if (err) console.log(err, err.stack)
        else {
            
            if (index == 0) { 
                response1.move = x[index];
                response1.r1 = data.Labels[0].Name;
                response1.r2 = data.Labels[1].Name;
                response1.r3 = data.Labels[2].Name;
                response1.r4 = data.Labels[3].Name;
                response1.r5 = data.Labels[4].Name;
            }

            if (index == 1) { 
                response2.move = x[index];
                response2.r1 = data.Labels[0].Name;
                response2.r2 = data.Labels[1].Name;
                response2.r3 = data.Labels[2].Name;
                response2.r4 = data.Labels[3].Name;
                response2.r5 = data.Labels[4].Name;
            }

            if (index == 2) { 
                response3.move = x[index];
                response3.r1 = data.Labels[0].Name;
                response3.r2 = data.Labels[1].Name;
                response3.r3 = data.Labels[2].Name;
                response3.r4 = data.Labels[3].Name;
                response3.r5 = data.Labels[4].Name;
            }

            if (index == 3) { 
                response4.move = x[index];
                response4.r1 = data.Labels[0].Name;
                response4.r2 = data.Labels[1].Name;
                response4.r3 = data.Labels[2].Name;
                response4.r4 = data.Labels[3].Name;
                response4.r5 = data.Labels[4].Name;
            }
        




        /*let response2 = {
            move: x[index],
            r1:data.Labels[0].Name,
            r2:data.Labels[1].Name,
            r3:data.Labels[2].Name,
            r4:data.Labels[3].Name,
            r5:data.Labels[4].Name
        }
        var jsonComplete2 = JSON.stringify(response2)
         
        var c = jsonComplete1.concat(","+jsonComplete2);
        var f = JSON.stringify(c)*/
        /*let response = 
        'r1:'+x[index]+''*/

        /*function response(move, r1, r2, r3, r4, r5) {
            this.move = move;
            this.r1 = r1;
            this.r2 = r2;
            this.r3 = r3;
            this.r4 = r4;
            this.r5 = r5;
        }
        
        var resultado = new response(x[index],data.Labels[0].Name,data.Labels[1].Name,data.Labels[2].Name,data.Labels[3].Name,data.Labels[4].Name);
        var jsonComplete = JSON.stringify(resultado)
         
        result += resultado;*/
        /*var response = new Object();
        response.move = x[index];
        response.r1 = data.Labels[0].Name;
        response.r2 = data.Labels[1].Name;
        response.r3 = data.Labels[2].Name;
        response.r4 = data.Labels[3].Name;
        response.r5 = data.Labels[4].Name;
        
        result += response*/

        /*let response = {
            move: x[index],
            r1: data.Labels[0].Name,
            r2: data.Labels[1].Name,
            r3: data.Labels[2].Name,
            r4: data.Labels[3].Name,
            r5: data.Labels[4].Name
        }
        var jsonComplete = JSON.stringify(response); 
        
        let response2 = {
            move: x[index],
            re: "fces",
            r2vd: "fces",
            rdv3: "fces",
            rdvs4: "fces",
            rvvv5: "fces"
        }
        var jsonComplete2 = JSON.stringify(response2); 
         
        jsonComplete = jsonComplete.concat(jsonComplete2);
        */

        //let obj_unidos = response.concat(response2)
        //result += response

        //result += response

        if (index == x.length - 1) {
            //console.log(response)
            //console.log(jsonComplete)
            app.get('/', (req, res) => {
                res.json({
                    response1, response2, response3, response4
                })
            })
        }
    }


        /*
        var response = {};
        response.move = x[index];
        response.r1 = data.Labels[0].Name;
        response.r2 = data.Labels[1].Name;
        response.r3 = data.Labels[2].Name;
        response.r4 = data.Labels[3].Name;
        response.r5 = data.Labels[4].Name;

        var jsonComplete = JSON.stringify(response); 
        console.log(jsonComplete); */

        /*else console.log(
            x[index],
            data.Labels[0].Name,
            data.Labels[1].Name,
            data.Labels[2].Name,
            data.Labels[3].Name,
            data.Labels[4].Name)*/
    })

}


app.listen(3000)
