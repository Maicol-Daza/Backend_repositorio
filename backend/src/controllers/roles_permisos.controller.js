const db = require('../config/conexion_db');

class RolPermisoController{
    // obtener todas las relaciones rol-permisos
    async obtenerRolPermisos(req, res){
        try{
            const[rolPermisos] = await db.query(`
                SELECT rp.id_rol_permiso, rp.id_rol, r.nombre AS rol,p.nombre AS permiso
                FROM rol_permiso rp
                JOIN roles r ON rp.id_rol
                JOIN permisos p ON rp.permiso_id = p.id_permiso
                `);
                res.json(rolPermisos);
        }catch (error){
            res.status(500).json({ error : 'Error al obtener roles-permisos'});
        }
    }
    async obtenerPermisosRol(req, res){
        const{ idrol } = req.params;
        try{
            const [rolPermisos] = await db.query(`
                SELECT
                rp.id_rol_permiso,
                rp.id_rol,
                r.nombre AS rol,
                p.id_permiso,
                p.nombre AS permiso
            FROM rol_permiso rp
            JOIN roles r ON rp.id_rol = r.id_rol
            JOIN permisos p ON rp.permiso_id= p. id_permiso
            WHERE rp.id_rol =?`
        ,[idrol]); //parametro
        
        res.json(rolPermisos); 
        }catch (error){
            console.error("Error en obtenerPermisosDeRol:",error);
            res.status(500).json({ error : 'Error al obtener roles-permisos'});
        }
    }

   
    //obtener una relación por id
    async obtenerRolPermisoPorId(req, res){
        const { id } = req.params;
        try {
            const [rolPermiso] = await db.query(`
                SELECT rp.id_rol_permiso, r.nombre AS rol, p.nombre AS permiso
                FROM rol_permiso rp
                JOIN roles r ON rp.id_rol = r.id_rol
                JOIN permisos p ON rp.permiso_id = p.id_permiso
                WHERE rp.id_rol_permiso = ?
                `, [id]);
                
                if (rolPermiso.lenght === 0) {
                    return res.status(404).json({ error: 'Relacion rol-permiso no encontrada'});
                }
                res.json(rolPermiso[0]);
        } catch (error) {
            res.status(500).json({error:'Error al obtener relación rol-permiso'});
        }
    }

    // Asignar un permiso a un rol
    async agregarRolPermiso(req, res){
        const { id_rol,permiso_id } = req.body;
        try{
            await db.query(
                'INSERT INTO rol_permiso SET id_rol = ?, permsiso_id'
            )
        }
    }
}