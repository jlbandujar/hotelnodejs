const express = require('express');
const { exit } = require('process');
const app = express()
require('dotenv').config()
const PORT = process.env.PORT;
app.use(express.static('public'));
app.get('/reserva', function (req, res) {
    if (req.query.vistas) {
        res.send("No nos quedan habitaciones con vistas");
        exit;
    }

  let tipo=req.query.tipo;
  switch (tipo) {
    case "ind":
      precio=50;
      break;
    case "dob":
        precio=60;
        break;
    case "trip":
        precio=75;
        break;
  }
  let numero=req.query.numero;
  let total = precio*numero;
  res.send("<h1>Total: " + total);

})

app.listen(PORT,console.log("Escuchando el puerto",PORT))