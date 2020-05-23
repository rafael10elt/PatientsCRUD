//Creating the table and defining the data types of the columns.
exports.up = function (knex) {
    return knex.schema.createTable('patients', function (table) {
        table.increments();
        table.string('FirstName').notNullable();
        table.string('LastName').notNullable();
        table.string('Email').notNullable();
        table.string('PhoneNumber').notNullable();
        table.string('BirthDate').notNullable();
    })
};

//Rollback function to undo changes
exports.down = function (knex) {
    return knex.schema.dropTable('patients');
};