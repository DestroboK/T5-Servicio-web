const knex = require("./knex");

function crearContacto(contacto) {
    return knex("Contacto").insert(contacto);
};

function obtenerContactos(){
    return knex("Contacto").select("*");
};


function borrarContacto(id){
    return knex("Contacto").where("id", id).del();
};

module.exports = {
    crearContacto,
    obtenerContactos,
    borrarContacto
};