const express = require ("express")
const app = express()
app.use(express.json())
const puerto = 3000
const db = require("./config/db")

app.use("/api/tecnologies",require("./routes/tecnologies"))
app.use("/api/experiences", require("./routes/experiences"))




app.listen(puerto,()=>{
    console.log("Servidor activo express mongoose:" + puerto)
})
db()

