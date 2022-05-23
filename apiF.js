//CONSUMINDO API NO FRONTEND

async function getContent() {
    try {
        const response = await fetch('http://localhost:4567/')

        const data = await response.json();
        createUsers(data)
        // console.log(data);


    } catch (error) {

        console.log(`Errou, confira: ${error}`)

    }

}

const createUsers = users => {
    let output = ''


    //Usando forEach
    /* users.forEach(element => {
        output += `<li>${element.name}</li>`
    }); */

    for (let user of users) {
        output += `<li>${user.name} </li>`
    }


    document.querySelector('body').innerHTML = output



}



getContent()



