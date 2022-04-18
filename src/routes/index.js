const express = require('express')

const personController = require('../controller/person.controller')

const router = express.Router()

router.get("/person/", personController.getAllPersons)
router.get("/person/:id", personController.getPersonById)
router.post("/person", personController.createPerson)
router.delete("/person/:id", personController.deletePerson)
router.put("/person/:id", personController.updatePerson)

module.exports = router