const express = require('express')
const cors = require('cors')

// Router
const router = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

// use Router
app.use('/api', router)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
