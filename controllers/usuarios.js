
const {request, response} = require ('express');


const usuariosGet = (req = request, res = response) => {
    const {q,nombre = 'No name', apikey, page=1, limit} = req.query;
    
    res.json({
       msg: 'get API- usuarios Get Controlador',
       q,
       nombre,
       apikey,
       page,
       limit
    });
 };

const usuariosPost = (req , res = response) => {

        
    const {nombre, edad} = req.body;
    
    res.json({
       msg: 'post API- usuarios Post Controlador',
       nombre,
       edad
    });
 };

const usuariosPut = (req, res = response) => {
    const {id}  = req.params;
    
    res.json({
       msg: 'put API- usuarios Put Controlador',
       id 
    });
 };

const usuariosPatch = (req, res = response) => {
    
    res.json({
       msg: 'patch API- usuarios Patch Controlador'
    });
 };

const usuariosDelete = (req, res = response) => {
    
    res.json({
       msg: 'delete API- usuarios Delete Controlador'
    });
 }









 module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
 }