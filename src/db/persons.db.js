const db = require('./database')

const getAllPersons = async () => {
    const sqlQuery = `SELECT * FROM persons`
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, (err, persons) => {
            if(err){
                reject(err)
            }else{
                resolve(persons)
            }
        })
    })
}

const getPersonById = async (id) => {
    var sqlQuery = `SELECT * FROM persons WHERE Id = ${id}`
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, function (err, person) {
            if (err){
                reject(err)
            }else{
                resolve(person)
            }
        })
    })
}

const createPerson = async (person) => {
    console.log(person.gender)
    var sqlQuery = `INSERT INTO persons (firstname, lastname, email, gender, phone, birthdate, active) VALUES ('${person.firstname}', '${person.lastname}', '${person.email}', '${person.gender}', '${person.phone}', '${person.birthdate}', '${person.active}')`;
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, function (err, personCreated) {
            if(err){
                reject(err)
            }
            else{
                person.id = personCreated.insertId
                resolve(person)
            }
        })
    })
}

const deletePerson =  async(id) => {
    var sqlQuery = `DELETE FROM persons WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, function(err, category, fields) {
            if(err) {
                reject(err)
            }
            else{
                resolve("Person deleted")
            }
        })
    })
}

const updatePerson = async(id, person) => {
    var sqlQuery = `UPDATE persons SET firstname = '${person.firstname}', lastname = '${person.lastname}', email = '${person.email}', gender = '${person.gender}', phone = '${person.phone}', birthdate = '${person.birthdate}', active = '${person.active}' WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
        db.query(sqlQuery, function(err, personEdited, fields) {
            if(err){
                reject(err)
            }else{
                person.id = id
                resolve(person)
            }
        })
    })
}

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    deletePerson,
    updatePerson
}