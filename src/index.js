const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Starting the server and defining the port number.
const port = 3333;

app.listen(port, function () {
    console.log('The server is running on the port ' + port);
});