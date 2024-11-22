import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const _dirname = dirname(fileURLToPath(import.meta.url))


const app = express()
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.get("/home",(req,res)=>{
    res.render("index.ejs")
})
app.post("/submit",(req,res)=>{
    var content = req.body["content"]
    var name = req.body["name"]
    console.log(content)
    res.render("index.ejs",{
        name: name,
        content: content,
    })
})
app.listen(3000,(req,res)=>{
    console.log("Running on port 3000.")
})