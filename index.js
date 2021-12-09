const express = require('express')
const app = express()
const port = 3000

let concepts = []

app.get('/concepts', (_, res) => {
  res.send(concepts)
})

app.listen(port, () => {
  console.log(`FHIR server listening on http://localhost:${port}`)
})