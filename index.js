const express = require('express')
const app = express()
const port = 3000

const jsonContent = {firstName: "Dagobert", lastName: "Duck"}
app.get('/', (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.json(jsonContent)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))