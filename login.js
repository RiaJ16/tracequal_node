module.exports = function(app){
    const ruta_login = '/login'

    app.post(ruta_login, (req, res)=>{
        console.log("intento de login")
    })

}
