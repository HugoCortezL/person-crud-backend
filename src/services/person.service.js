const personDb = require('../db/persons.db')

const getAllPersonsService = async (nameAndEmail) => {
    try{
        var persons = await personDb.getAllPersons(nameAndEmail)
        return persons
    }
    catch(e){
        throw new Error(e)
    }
}

const getPersonByIdService = async (id) => {
    try{
        var person = await personDb.getPersonById(id)
        return person
    }
    catch(e){
        throw new Error(e)
    }
}

const createPersonService = async (person) => {
    try{
        var personCreated = await personDb.createPerson(person)
        return personCreated
    }
    catch(e){
        throw new Error(e)
    }
}

const deletePersonService = async (id) => {
    try{
        var personDeleted = await personDb.deletePerson(id)
        return personDeleted;
    }
    catch(e){
        throw new Error(e)
    }
}

const updatePersonService = async (id, person) => {
    try{
        var personUpdated = await personDb.updatePerson(id, person)
        return personUpdated
    }
    catch(e){
        throw new Error(e)
    }
}

module.exports = {
    getAllPersonsService,
    getPersonByIdService,
    createPersonService,
    deletePersonService,
    updatePersonService
}