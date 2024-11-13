import express from "express"
import routes from "./routes/routes.js"

const app= express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routes)



app.listen(8080, ()=>{
     console.log("server on port 8080")
})

