const knex = require("./knex");

function crearContacto(contacto) {
    return knex("Contactos").insert(car);
}

function obtenerContactos(){
    return knex("Contactos").select("*");
}


function borrarContacto(id){
    return knex("Contactos").where("id", id).del();
}

module.exports = {
    crearContacto,
    obtenerContactos,
    borrarContacto
}