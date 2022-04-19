const mysql = require('mysql')

const connection = mysql.createConnection({
    host: "localhost",
    user: "username", //Change to the your mysql username
    password: "password", //Change to the your mysql password
    database: "persons"
})

connection.connect(function(err){
    if(err){
        console.log("Can't connect with database 'persons'")
    }else{
        console.log("Connected to database 'persons'")
    }
})

var createPersonsTable = "CREATE TABLE IF NOT EXISTS persons (Id INT AUTO_INCREMENT, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(40) NOT NULL, gender ENUM('Masculino', 'Feminino', 'Outro') NOT NULL, phone char(11) NOT NULL, birthdate DATE NOT NULL, active BOOLEAN DEFAULT true, PRIMARY KEY (ID))"
connection.query(createPersonsTable, (err, result) => {
    if(err){
        throw err
    }else{
        console.log("Table 'persons' created or exists")
    }
})

module.exports = connection