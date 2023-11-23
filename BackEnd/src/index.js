import express from 'express'
import bodyParser from 'body-parser'
import users from './routes/routes.js'

const app = express()
const PORT = 5555

app.use(bodyParser.json())

app.use('/users', users)

app.get('/', (req, res) => { res.send('My API. Ass: Dev Brito (full stack js)') })

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))