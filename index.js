//Kelvin Hernandez, 2019 - 8680, 2 de agosto 2021

const express = require ('express');
const app = express();
const Puerto = 8680;

app.use(express.json())

app.listen(
    Puerto,
    ()=> console.log(`En vivo en http://localhost:${Puerto}`)
);

app.get('/contactos', (req,res)=>{
    res.status(200).send({
        nombre: 'Kelvin',
        apellido: 'Hernandez',
        telefono: '20198680'
    })
});


app.post('/contactos/:id', (req,res)=>{
    const {id} = req.params;
    const { logo } = req.body;

    if(!logo){
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        contacto: `${logo} waos y ${id}`,
    })
});