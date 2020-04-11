const path = require('path');

const request = require('request');  

const key = require('../public/api.js');
const url = 'https://api.openweathermap.org/data/2.5/weather?q='; 

request(`${url}Saigon&${key.API_key}`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  /* console.log('body:', body); */ // Print the HTML
  const data = JSON.parse(response.body);
  console.log(data);
 
});


const express = require('express');
const app = express();
const port = 3000;

// This starts up the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/* console.log(__dirname); //path to the directory where the current script lives in, in this case /src
console.log(path.join(__dirname, '../public')); //path and filename where the current script lives in, in this case /src/app.js */

const publicDirectoryPath = path.join(__dirname, '../public')
//all static assets are in the public directory
app.use(express.static(publicDirectoryPath))    //use, a way to customize the server

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Please enter an address'
        })
    }
    





    /* res.send({
        forecast: 23,
        location: 'Orlando',
        address: req.query.address
     }); */
    
});


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Please start your search'
        })
    } 

    res.send({
        products: []
    })
    
    
});    





//app.com  -> This is the root, therefore ''
//app.com/help
//app.com/about

// The function specifies what to do when someone visits the specific route/URL
//request = information about the incoming request to the server
/* app.get('', (req, res) => {  *///app.com therefire it is blank '' 
//http://localhost:3000
    /* res.send('<h1>Hello Express!</h1>'); //send something back to the requester
}); 

app.get('/help', (req, res) => {
//http://localhost:3000/help  
    res.send( {
        Name: "Alen",
        alen: "hi",
    });
});
app.get('/about', (req, res) => {
//http://localhost:3000/help  
    res.send('<h1>TITLE</h1>');
}); */

/* const publicAboutPage = path.join(__dirname, '../public/about.html') 
app.use(express.static(publicAboutPage)) 

const publicHelpPage = path.join(__dirname, '../public/help.html') 
app.use(express.static(publicHelpPage))  */





