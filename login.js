const models = require('./models')

module.exports = function(app){
    const ruta_login = '/login'

    app.post(ruta_login, (req, res)=>{
        username = req.body.username;
        password = req.body.password;
        if(username && password){
            models.Usuario.find({username: username}).select('+password')
            .then(doc=>{
                if(password == doc[0].password){
                    res.json({response: 'Satisfactorio', login: true, 'usuario': doc[0]})
                }
                else{
                    res.json({response:'No satisfactorio', login: false})
                }
            })
            .catch(err=>{
                console.log('Error: ' + err)
            })
        }
        else{
            res.json({response:'No satisfactorio', login: false})
        }
    })
    
}
