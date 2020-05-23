const express = require('express');
/**
 * Importing the controller
 */
const PatientController = require('./controllers/PatientController');


const routes = express.Router();

//Defining all routes.
routes.get('/api/patients', PatientController.ListAll);
routes.get('/api/patients/:id', PatientController.ListOne);
routes.post('/api/patients', PatientController.Create);
routes.put('/api/patients/:id', PatientController.Update);
routes.delete('/api/patients/:id', PatientController.Delete);

module.exports = routes;