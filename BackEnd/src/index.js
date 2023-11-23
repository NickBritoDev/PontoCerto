import express from 'express'
import bodyParser from 'body-parser'
import users from './routes/routes.js'
import cors from 'cors';


const app = express()
const PORT = 5555

app.use(bodyParser.json())

app.use(cors());
app.use('/users', users)

app.get('/', (req, res) => { res.send('My API. Ass: Dev Brito (full stack js)') })

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))