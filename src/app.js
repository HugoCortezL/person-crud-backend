const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/", (req, res) => {
    res.send("App is working")
})

app.use('/api', routes)

app.listen(8080, () => {
    console.log("App is listening on port 8080")
})