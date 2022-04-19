const personService = require('../services/person.service')

const {getAllPersonsService} = personService
const {getPersonByIdService} = personService
const {createPersonService} = personService
const {deletePersonService} = personService
const {updatePersonService} = personService

const getAllPersons = async(req, res) => {
    const query = req.query
    var nameAndEmail = ''
    if('nameAndEmail' in query){
        nameAndEmail = query.nameAndEmail
    }
    try{
        var persons = await getAllPersonsService(nameAndEmail)
        res.status(200).send(persons)
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
}

const getPersonById = async(req, res) => {
    const id = req.params.id
    try{
        var person = await getPersonByIdService(id)
        if (person.length > 0){
            res.status(200).send(person[0])
        }else{
            res.status(204).send([])
        }
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
}

const createPerson = async (req, res) => {
    const person = req.body
    try{
        var personCreated = await createPersonService(person)
        res.status(201).send(personCreated)
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
}

const deletePerson = async(req, res) => {
    const id = req.params.id
    try{
        var personDeleted = await deletePersonService(id)
        res.status(200).send({result: personDeleted})
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
}

const updatePerson = async(req, res) => {
    const id = req.params.id
    const person = req.body
    try{
        var personUpdated = await updatePersonService(id, person)
        res.status(200).send(personUpdated)
    }
    catch(e){
        console.log(e)
        res.status(400)
    }
}

module.exports = {
    getAllPersons,
    getPersonById,
    createPerson,
    deletePerson,
    updatePerson
}