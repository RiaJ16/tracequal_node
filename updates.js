const models = require('./models')

module.exports = function(app){

    const ruta_actualizar = '/actualizar'

    app.get(ruta_actualizar+'/usuario/:id', (req, res)=>{
        const id=req.params.id
        models.Usuario.findByIdAndUpdate({_id:id}, {$set:{nombre:req.body.nombre}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/proyecto/:id', (req, res)=>{
        const id=req.params.id
        models.Proyecto.findByIdAndUpdate({_id:id}, {$set:{nombre:req.body.nombre}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/progreso/:id', (req, res)=>{
        const id=req.params.id
        models.Progreso.findByIdAndUpdate({_id:id}, {$set:{
            progreso_requisitos: req.body.requisitos,
            progreso_diseno: req.body.diseno,
            progreso_codigo: req.body.codigo,
            progreso_pruebas: req.body.pruebas,
        }})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/rol/:id', (req, res)=>{
        const id=req.params.id
        models.Rol.findByIdAndUpdate({_id:id}, {$set:{nombre:req.body.rol}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/requisito/:id', (req, res)=>{
        const id=req.params.id
        models.Requisito.findByIdAndUpdate({_id:id}, {$set:{historia_de_usuario:req.body.id.historia_de_usuario}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/requisito_tecnico/:id', (req, res)=>{
        const id=req.params.id
        models.RequisitoTecnico.findByIdAndUpdate({_id:id}, {$set:{secuencia:req.body.secuencia}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/diseno/:id', (req, res)=>{
        const id=req.params.id
        models.Diseno.findByIdAndUpdate({_id:id}, {$set:{diagrama:req.body.diagrama}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/codigo/:id', (req, res)=>{
        const id=req.params.id
        models.Codigo.findByIdAndUpdate({_id:id}, {$set:{pseudocodigo:req.body.pseudocodigo}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

    app.get(ruta_actualizar+'/prueba/:id', (req, res)=>{
        const id=req.params.id
        models.Prueba.findByIdAndUpdate({_id:id}, {$set:{veredicto:req.body.veredicto}})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al actualizar", err.message)
        })
    })

}