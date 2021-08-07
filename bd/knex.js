const knex = require("knex")


const conneccionKnex = knex({
    client: "sqlite3",
    connection:{
        filename: "Almacen.sqlite3"
    }
});

module.exports = conneccionKnex;