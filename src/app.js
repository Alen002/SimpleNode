const path = require('path');

const express = require('express');
const app = express();
const port = 3000;

console.log(__dirname); //path to the directory where the current script lives in, in this case /src
console.log(path.join(__dirname, '../public')); //path and filename where the current script lives in, in this case /src/app.js


const publicAboutPage = path.join(__dirname, '../public/about.html') 
app.use(express.static(publicAboutPage)) 

const publicHelpPage = path.join(__dirname, '../public/help.html') 
app.use(express.static(publicHelpPage)) 



const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))    //use, a way to customize the server








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

app.get('/weather', (req, res) => {
//http://localhost:3000/help  
    res.send({
        forecast: 23,
        location: 'Orlando'
     });
});


// This starts up the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});




