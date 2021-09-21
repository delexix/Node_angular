const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express() // starts a new Express app
const pagesDirectory = `${__dirname}/pages`

app.use(express.static('pages/public')) // our Middleware
app.use(express.json())//pour parser les json reçu
app.use(cors());//allow request from other origins -> not only localhost:300

app.listen(3000, () => {
	console.log('App listening on port 3000')
})

// GET /
app.get("/",(req,res)=>{
    /*res.json({
        name : "Bryan" //transforme l'objet javascript en json tout seul
    })*/
    res.sendFile(path.resolve(pagesDirectory,'home.html'))
    //res.sendFile(path.resolve(__dirname+'/pages','home.html'))
})

// GET /about
app.get('/about',(req, res) => { res.sendFile(path.resolve(pagesDirectory,'about.html')) 
}) 

app.post("/new_user",(req,res)=>{
    res.json(req.body)
})

app.get("/employee",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'test.json'))
})

// GET /adlsfalsdfjk a.k.a Everything that is no matched above
app.get("*", (req, res) => {
    res.sendFile(path.resolve(pagesDirectory,'404.html'))
  })