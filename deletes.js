const models = require('./models')

module.exports = function(app){

    const ruta_eliminar = '/eliminar'

    app.get(ruta_eliminar+'/usuario/:id', (req, res)=>{
        const id=req.params.id
        models.Usuario.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/proyecto/:id', (req, res)=>{
        const id=req.params.id
        models.Proyecto.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/progreso/:id', (req, res)=>{
        const id=req.params.id
        models.Progreso.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/rol/:id', (req, res)=>{
        const id=req.params.id
        models.Rol.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/requisito/:id', (req, res)=>{
        const id=req.params.id
        models.Requisito.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/requisito_tecnico/:id', (req, res)=>{
        const id=req.params.id
        models.RequisitoTecnico.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/diseno/:id', (req, res)=>{
        const id=req.params.id
        models.Diseno.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/codigo/:id', (req, res)=>{
        const id=req.params.id
        models.Codigo.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

    app.get(ruta_eliminar+'/prueba/:id', (req, res)=>{
        const id=req.params.id
        models.Prueba.findByIdAndDelete({_id:id})
        .then(doc=>{
            res.json({response:'success', data:doc})
        })
        .catch(err=>{
            console.log("Error al eliminar", err.message)
        })
    })

}