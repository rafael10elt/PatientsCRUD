const connection = require('../database/connection');

module.exports = {
    //Defining the ListAll method to list all patients.
    async ListAll(req, res) {
        const patients = await connection('patients').select('*');

        return res.json(patients);
    },
    //Defining the ListOne method for listing a specific patient.

    async ListOne(req, res) {
        const {
            id
        } = req.params;
        const patients = await connection('patients')
            .where('id', id)
            .select('*')
            .first();
        if (!patients) {
            return res.status(400).json({
                error: 'Patient not found!'
            });
        }
        return res.json(patients);
    },
    //Defining the Create method to register a new patient.
    async Create(req, res) {
        const {
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            BirthDate,
        } = req.body;

        const {
            id
        } = await connection('patients').insert({
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            BirthDate,
        });
        return res.json({
            id,
            FirstName,
            LastName,
            Email,
            PhoneNumber,
            BirthDate,
        });
    },
    //Defining the Delete method to delete a specific patient's record.
    async Delete(req, res) {
        const {
            id
        } = req.params;

        const patients = await connection('patients')
            .where('id', id)
            .select('id')
            .first();

        await connection('patients').where('id', id).delete();

        return res.status(204).send();
    },
    //Defining the Update method to edit the information for a specific patient.
    async Update(req, res) {
        const {
            id
        } = req.params;
        const patients = await connection('patients')
            .where('id', id)
            .select('id')
            .first();


        await connection('patients').where('id', id).update({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Email: req.body.Email,
            PhoneNumber: req.body.PhoneNumber,
            BirthDate: req.body.BirthDate,
        });
        return res.status(204).send();
    }
};