const express = require('express');
const app = express()
    // importation de la base de donnee
const db = require('./connect/index');



const port = process.env.PORT || 4000
app.listen(port, () => console.log(`le server est demarar sur le port ${port}.....`));