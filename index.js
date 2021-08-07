//Kelvin Hernandez, 2019 - 8680, 2 de agosto 2021
const express = require ('express');
const app = express();
const bd = require("./bd/contactos")
const Puerto = 8680;

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.listen(
    Puerto,
    ()=> console.log(`En vivo en http://localhost:${Puerto}`)
);

app.get("/contactos", async (req,res)=>{
    const contactos = await bd.obtenerContactos();
    res.status(200).json({contactos});
});


app.post("/contactos", async (req,res)=>{
    const resultados = await bd.crearContacto(req.body);
    res.status(201).json({id: resultados[0]}); //Devolvemos el valor del ID cuando el POST sale bien
});



app.delete("/contactos/:id", async (req,res)=>{
    await bd.borrarContacto(req.params.id);
    res.status(200).json({ success: true});
}) 