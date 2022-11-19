const express = require('express')
const port = 9000

const app = express()
app.use(express.json())

//Routers
const userRouter = require('./Users/users.router')

app.get('/', (req, res) => {
  res.status(200).json({message: 'All ok'})
})

app.use('/api/v1', userRouter)




app.listen(port, ()=> {
  console.log(`Server started at port ${port}`)
})