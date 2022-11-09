const models = require('./models')

module.exports = function(app){

    const ruta_insertar = '/insertar'

    app.post(ruta_insertar+'/usuario', (req, res)=>{
        insertar_usuario(req, res)
    })

    app.post(ruta_insertar+'/proyecto', (req, res)=>{
        insertar_proyecto(req, res)
    })

    app.post(ruta_insertar+'/progreso', (req, res)=>{
        insertar_progreso(req, res)
    })

    app.post(ruta_insertar+'/rol', (req, res)=>{
        insertar_rol(req, res)
    })

    app.post(ruta_insertar+'/requisito', (req, res)=>{
        insertar_requisito(req, res)
    })

    app.post(ruta_insertar+'/requisito_tecnico', (req, res)=>{
        insertar_requisito_tecnico(req, res)
    })

    app.post(ruta_insertar+'/diseno', (req, res)=>{
        insertar_diseno(req, res)
    })

    app.post(ruta_insertar+'/codigo', (req, res)=>{
        insertar_codigo(req, res)
    })

    app.post(ruta_insertar+'/prueba', (req, res)=>{
        insertar_prueba(req, res)
    })
}

 function insertar_usuario(req, res){
    const valor=new models.Usuario({
        username:req.body.username,
        nombre:req.body.nombre,
        apepat:req.body.apepat,
        apemat:req.body.apemat,
        password:req.body.password,
        rol:req.body.rol,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_proyecto(req, res){
    const valor=new models.Proyecto({
        nombre: req.body.nombre,
        fecha_de_ingreso: new Date(),
        id_progreso: req.body.id_progreso,
        usuarios: [req.body.id_usuario],
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_progreso(req, res){
    const valor=new models.Progreso({
        progreso_diseno: req.body.progreso_diseno,
        progreso_codigo: req.body.progreso_codigo,
        progreso_pruebas: req.body.progreso_pruebas,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_rol(req, res){
    const valor=new models.Rol({
        nombre:req.body.nombre,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_requisito(req, res){
    const valor=new models.Requisito({
        nombre: req.body.nombre,
        historia_de_usuario: req.body.historia_de_usuario,
        fecha_de_ingreso: new Date(),
        proyecto: req.body.id_proyecto,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_requisito_tecnico(req, res){
    const valor=new models.RequisitoTecnico({
        requisito: req.body.id_requisito,
        fecha: new Date(),
        fecha_de_complecion: req.body.fecha_de_complecion,
        dependencias: req.body.dependencias,
        precondiciones: req.body.precondiciones,
        descripcion: req.body.descripcion,
        secuencia: req.body.secuencia,
        postcondicion: req.body.postcondicion,
        comentarios: req.body.comentarios,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_diseno(req, res){
    const valor=new models.Diseno({
        requisito: req.body.id_requisito,
        fecha: new Date(),
        fecha_de_complecion: req.body.fecha_de_complecion,
        descripcion: req.body.descripcion,
        diagrama: req.body.diagrama,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_codigo(req, res){
    const valor=new models.Codigo({
        requisito: req.body.id_requisito,
        fecha: new Date(),
        fecha_de_complecion: req.body.fecha_de_complecion,
        pseudocodigo: req.body.pseudocodigo,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}

function insertar_prueba(req, res){
    const valor=new models.Prueba({
        requisito: req.body.id_requisito,
        fecha: new Date(),
        fecha_de_aplicacion: req.body.fecha_de_aplicacion,
        fecha_de_complecion: req.body.fecha_de_complecion,
        obbjetivo: req.body.objetivo,
        descripcion: req.body.descripcion,
        veredicto: req.body.veredicto,
        notas: req.body.notas,
    })
    valor.save()
    .then(doc=>{
        console.log('Información almacenada', doc)
        res.json({response:"Success"})
    })
    .catch(err=>{
        console.log("Error al insertar", err.message)
    })
}
