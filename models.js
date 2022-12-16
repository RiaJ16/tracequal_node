const mongoose = require('mongoose')

const Usuario=mongoose.model('usuario', {
    id: Number,
    username: String,
    nombre: String,
    apepat: String,
    apemat: String,
    email: String,
    password: {
        type: String,
        select: false,
    },
    rol: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'rol',
    },
}, 'usuario')
module.exports.Usuario = Usuario;

const Proyecto=mongoose.model('proyecto', {
    id: Number,
    nombre: String,
    fecha_de_ingreso: Date,
    progreso: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'progreso',
    },
    usuarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usuario',
    },],
}, 'proyecto')
module.exports.Proyecto = Proyecto;

const Progreso=mongoose.model('progreso', {
    id: Number,
    progreso_requisitos: Number,
    progreso_diseno: Number,
    progreso_codigo: Number,
    progreso_pruebas: Number,
}, 'progreso')
module.exports.Progreso = Progreso;

const Rol=mongoose.model('rol', {
    id: Number,
    nombre: String,
}, 'rol')
module.exports.Rol = Rol;

const Requisito=mongoose.model('requisito', {
    id: Number,
    nombre: String,
    historia_de_usuario: String,
    fecha_de_ingreso: Date,
    proyecto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'proyecto',
    },
}, 'requisito')
module.exports.Requisito = Requisito;

const RequisitoTecnico=mongoose.model('requisito_tecnico', {
    id: Number,
    id_requisito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requisito',
    },
    fecha: Date,
    fecha_de_complecion: Date,
    dependencias: String,
    precondiciones: String,
    descripcion: String,
    secuencia: String,
    postcondicion: String,
    comentarios: String,
}, 'requisito_tecnico')
module.exports.RequisitoTecnico = RequisitoTecnico;

const Diseno=mongoose.model('diseno', {
    id: Number,
    id_requisito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requisito',
    },
    fecha: Date,
    fecha_de_complecion: Date,
    descripcion: String,
    diagrama: String,
}, 'diseno')
module.exports.Diseno = Diseno;

const Codigo=mongoose.model('codigo', {
    id: Number,
    id_requisito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requisito',
    },
    fecha: Date,
    fecha_de_complecion: Date,
    pseudocodigo: String,
}, 'codigo')
module.exports.Codigo = Codigo;

const Prueba=mongoose.model('prueba', {
    id: Number,
    id_requisito: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'requisito',
    },
    fecha: Date,
    fecha_de_aplicacion: Date,
    fecha_de_complecion: Date,
    objetivo: String,
    descripcion: String,
    veredicto: Number,
    notas: String,
}, 'prueba')
module.exports.Prueba = Prueba;