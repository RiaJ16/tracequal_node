const models = require('./models')

module.exports = function(app){

    app.get('/usuarios', (req, res)=>{
        models.Usuario.find().populate("rol")
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/proyectos', (req, res)=>{
        models.Proyecto.find().populate("usuarios").populate("progreso")
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/proyectos/:usuario_id', (req, res)=>{
        const usuario_id=req.params.usuario_id
        models.Proyecto.find({"usuarios": usuario_id}).populate("progreso")
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/progresos', (req, res)=>{
        models.Progreso.find()
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/roles', (req, res)=>{
        models.Rol.find()
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/requisitos', (req, res)=>{
        models.Requisito.find()
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/requisitos_tecnicos', (req, res)=>{
        models.RequisitoTecnico.find().populate('requisito')
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/disenos', (req, res)=>{
        models.Diseno.find().populate('requisito')
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/codigos', (req, res)=>{
        models.Codigo.find().populate('requisito')
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })

    app.get('/pruebas', (req, res)=>{
        models.Prueba.find().populate('requisito')
        .then(doc=>{
            res.json({response:'satisfactorio', data:doc})
        })
        .catch(err=>{
            console.log('Error: ' + err)
        })
    })
}