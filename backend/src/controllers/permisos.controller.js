const db = require('../config/conexion_db');

class permisosController{
    async obtenerPermisos(req,res) {
        try{
            const [permisos]= await db.query('SELECT * FROM permisos');
            res.json(permisos); 
        } catch (error){
            res.status(500).json({error:'Error al obtener permisos'});
        }
    }
    async obtenerPermisosId(req, res){
        const { id } = req.params;
        try{
            const [permiso] = await db.query('SELECT * FROM permisos WHERE id_permisos = ?',[id]);
            if (permiso.lenght === 0){
                return res.status(404).json({ error :'Permisos no encontrado'});
            }
            res.json(permiso[0]);
        }catch (error){
            res.status(500).json({ error: 'Error al obtener permiso'});
        }
    }
    async agregarPermiso(req, res ){
        const { nombre,descripcion } = req.body;
        try {
            await db.query('INSERT INTO permisos (nombre,descripcion) VALUES(?, ?)',[nombre, descripcion]);
            res.json({mensaje: 'Permiso agregado correctanente'});
        }catch(error){
            res.status(500).json({ error:'Error al actualizar permiso'});
        }
    }


}
