/*
    This is the simplest code you need to create an Express server
*/

// Import and initialize express. Make sure to install express using NPM
const express = require('express')
const app = express()
const axios = require('axios')
app.use(express.json()) // We cannot read incoming requests when we call our api

// Creates a GET route with a path of /hello
// To access this route you can go to localhost:8080/hello in your browser
// or send a GET request to localhost:8080/hello using postman
app.get('/hello', function (req, res)
{

    // Send a message as a response to the request
    res.send('Hello world!')
})

// Query Parameters
app.get('/query', function (request, response)
{
    console.log(request.query)
    // query my database to see if it has that laptop
    // Query Parameter = http://localhost:8080/query?Color=purple&laptop=hp
    // data
    // response.send(data)
    response.send("Hello World") //Send response to user
})

// Using Axios
app.post('/callAddPerson', function (postmanRequest, postmanResponse)
{
    console.log(postmanRequest.body)

    // Saving our incoming request into a const called body
    const body = postmanRequest.body

    // Input to axios.post. Send post request to 'https://java-sample-api-2020.herokuapp.com/addPerson' too
    axios.post('https://java-sample-api-2020.herokuapp.com/addPerson', body)
        .then(function (apiResponse)
        {
            console.log(apiResponse.data)
            // postmanResponse.send('done') // Should be a json object sent to user
            postmanResponse.status(200).json({ 'message': 'person added' })
        })
        // catch error
        .catch(function (error)
        { // 500 means the server did something wrong
            postmanResponse.status(500).json({ 'message': 'there was an error' })
        })
})

/* 
    This method tells our API to listen for incoming requests.
    The first argument to app.listen is the port that we want the API to listen on.
    In this case we use port 8080. The second argument is a function that will
    display a message to the terminal saying that our API is now listening
*/
app.listen(8080, () => console.log(`Example app listening at http://localhost:8080`))