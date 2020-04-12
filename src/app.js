
const request = require('request');  
//import the API keys from another file
const key = require('../public/api.js');  

// Request for weather data
const url = `https://api.openweathermap.org/data/2.5/weather?q=Beijing&${key.API_key}`

request({url: url, json: true}, function (error, response, body) {
// for lower level errors -> such as no internet connection etc.    
    if(error) { 
        console.log('something went wrong. Maybe there is no internet connection...');
// if response.body.message is true -> there is a message        
    } else if (response.body.message) { 
// Output 'city not found'
        console.log(response.body.message); 
    } else {
        console.log(`the city is ${response.body.name}`)
        console.log('The temperature is right now', Math.round(response.body.main.temp - 273.15)); 
    }
    
    /* console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    /* console.log('body:', body); */ // Print the HTML
    /* const data = JSON.parse(response.body);
    console.log(data.sys);  */
 
});


// Geocoding
const urlGeocode = `https://api.mapbox.com/geocoding/v5/mapbox.places/?????.json?access_token=${key.api_Mapbox}&limit=1`;

request({url: urlGeocode, json: true}, (error, response, body) => {
   if (error) {
        console.log('Unable to retrieve data.');
   } else if (response.body.message) {
        console.log('Something went wrong. Please type again your destination');

    } else { 
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(latitude)
        console.log(longitude)
   }
   
   
   
    
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

const path = require('path');
const publicDirectoryPath = path.join(__dirname, '../public')
//all static assets are in the public directory
//use, a way to customize the server
app.use(express.static(publicDirectoryPath))    

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





