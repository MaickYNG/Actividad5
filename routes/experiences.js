const express = require ("express")
const router = express.Router()
const experiencia = require("../controllers/experienciasCtel")
const {check} = require ("express-validator")


router.post("/",
    experiencia.experienciaGuardar
)

router.put("/", 
    [
        check("nombre", "Registra un mombre valido").not().isEmpty()
    ]

    ,experiencia.experienciaActualizar
)

router.delete("/:id",
    experiencia.experienciaEliminar
)

module.exports = router