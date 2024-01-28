require('dotenv').config()
console.log(process.env) 

const express = require('express') // both are same 
const app = express()

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter' ,(req,res) => {
  res.send('hiteshdotcom')
})
app.get('/login',(req,res) => {
  res.send('<h1> please login atchai aur code')
})
app.get('/YT',(REQ,RES)=>{
  RES.send('<H2> DIONT WATCJH OUTUBE')
})
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`)
})