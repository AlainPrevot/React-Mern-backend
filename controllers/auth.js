// Son las funciones de las rutas
const {response} = require('express')
const Usuario = require('../models/Usuario.js')

const crearUsuario =  async(req, res=response) => {


    const {name, email, password} = req.body;

    try{

        let usuario = await Usuario.findOne({email})

        if(usuario){
            return res.status(400).json({
                ok:false,
                msg: 'Un usuario existe con ese correo'
            })
        }
        
        usuario = new Usuario(req.body)

        await usuario.save()

        res.status(201).json({
            "ok":true,
            uid: usuario.id,
            name: usuario.name
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }


}

const loginUsuario = (req, res=response) => {

    const {email, password} = req.body;



    res.json({
        "ok":true,
        msg: 'login',
        email,
        password
    })
}

const revalidarToken =  (req, res=response) => {
    res.json({
        "ok":true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}