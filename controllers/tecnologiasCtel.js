const { validationResult } = require("express-validator")
const tecnologiesModel= require ("../models/tecnologiesSchema")



const tecnologiasGuardar =async (req,res)=>{
    const errores = validationResult(req)
    
    if(!errores.isEmpty)
        res.status(401).json({errores: errores.array()})
    try{
        const objeto = new tecnologiesModel(req.body)
        objeto.save()
        res.status(200).json({"message": "Tecnologia guardada"})
    }catch(err){
        res.status(400).json("error" , err)
    }


}




const tecnologiaListar = async(req,res)=>{
    const tecnologias = await tecnologiesModel.find()
    console.log (tecnologias)
    res.status(200).json(tecnologias)
}

const tecnologiasEliminar= async (req,res)=>{

    try{
        const id = req.params.id
        const rta = await tecnologiesModel.deleteOne({_id : id})
        res.status(200).json({"message": "dato Eliminado Exito (tecnologia)"})

    }catch(err){
        res.status(400).json("error", err)
    }
    
    
}


    
   


module.exports ={
                    tecnologiasGuardar,
                    tecnologiaListar,
                    tecnologiasEliminar

}