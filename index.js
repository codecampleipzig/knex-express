const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./knexfile.js')
const knex = require('knex')(config.development)

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({ msg: 'Hello World' })
})

// Create
app.post('/plants', async (req, res) => {
  try {
    const [id] = await knex('plants').insert(req.body)
    const plant = await knex('plants').select().where({ id })
    res.status(201).send(plant)
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
})

// Find One
app.get('/plants/:id', async (req, res) => {
  try {
    res.send(await knex('plants').select().where({ id: req.params.id }))
  } catch (error) {
    console.error(error)
  }
})

// Find All (with Join)
app.get('/plants', async (req, res) => {
  try {
    const plants = await knex('plants').select('plants.id as id', 'name', 'description', 'image', 'available', 'ownerId', 'email as ownerEmail', 'plants.created_at').leftJoin('users', 'plants.ownerId', '=', 'users.id')
    res.send(plants)
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
})

// Users with Plants
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params
    const [{ password, ...user }] = await knex('users').select().where({ id })
    const plants = await knex('plants').select().where({ ownerId: id })
    res.send({
      ...user,
      plants
    })
  } catch (error) {
    console.error(error)
    res.sendStatus(400)
  }
})

async function main () {
  await knex.migrate.latest()
  app.listen(PORT, () => console.log(`Server started listening on http://localhost:${PORT}`))
}

main()
