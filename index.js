const express = require('express');
const app = express()
    // importation de la base de donnee
const db = require('./connect/index');

db.authenticate()
    .then(() => console.log('la connexion a la base est tres bien etablie'))
    .catch(error => console.log(error));

app.use('/api/user', require('./routes/user'));


const port = process.env.PORT || 4000
app.listen(port, () => console.log(`le server est demarar sur le port ${port}.....`));