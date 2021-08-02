const express = require("express")
const app = express()

app.get('/app1', (req, res)=>{
	res.status(201).json({message: "hello from app1"})
})

app.get('/app1/example', (req, res)=>{
	res.status(200).json({message: "Example app1! =)"})
})
app.listen(3000, ()=>{console.log('Server App1 On')})
