const express = require('express')
const cors = require('cors')

// Router
const router = require('./routes')
const phantomRouter = require('./routes/phantom')
const dirtyReadRouter = require('./routes/dirty-read')
const unrepeatableReadRouter = require('./routes/unrepeatable-read')

const app = express()

app.use(express.json())
app.use(cors())

// use Router
app.use('/api/phantom', phantomRouter)
app.use('/api', router)
app.use('/api/dirty-read', dirtyReadRouter)
app.use('/api/unrepeatable-read', unrepeatableReadRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
