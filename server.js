const cors = require('cors')
const express = require('express');
//diferente do fetch que é usado no front aqui usaresmos o axios
const axios = require('axios')
const app = express();
const users = [
    { "name": 'Wellington', "lastName": 'D.' },
    { "name": 'Wellington2', "lastName": 'Anjos' },
    { "name": 'Wellbr', "lastName": 'dos ' }
]
//Liberando acesso para qualquer pessoa acessar minha api com o Cors
app.use(cors())

//servindo api
app.get('/', async (req, res) => {

    //Utilizando axios para consumir api no back


    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return res.json(data)
    } catch (error) {

        console.error(error);

    }



})








//porta que a api ficara escutando..
app.listen('4567')