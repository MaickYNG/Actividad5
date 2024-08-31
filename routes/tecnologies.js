const express = require ("express")
const router = express.Router()
const tecnologias = require("../controllers/tecnologiasCtel")
const {check} = require ("express-validator")

router.get("/",//(req,res)=>{

    tecnologias.tecnologiaListar
)

router.post("/",
    [
       check("nombre","nombre obligatorio").not().isEmpty(),
       check("nombre", "longitud nombre de tecnologia no valida").isLength({min:4, max:25})
    ]  , 
    tecnologias.tecnologiasGuardar
)


router.delete("/:id",
    tecnologias.tecnologiasEliminar
)






module.exports = router