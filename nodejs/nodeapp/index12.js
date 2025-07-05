import express from 'express'
const app=express()
const PORT = process.argv[2] || "8080"
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})
app.get("/",(req,res)=>{
    res.send(`Hello World from PORT ${PORT}`)
})