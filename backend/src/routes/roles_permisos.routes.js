const express = require('express');
const RolesPermisosController = require('../controllers/roles_permisos.controller');

const router = express.Router();
const rolesPermisosController = new RolesPermisosController();

router.get('/', (req, res) => rolesPermisosController.obtenerRolesPermisos(req, res));
router.get('/rol/:idrol', (req, res) => rolesPermisosController.obtenerRolesPermisosPorRol(req, res));
router.get('/:id', (req, res) => rolesPermisosController.obtenerRolesPermisosPorPermiso(req, res));
router.post('/', (req, res) => rolesPermisosController.agregarRolesPermisos(req, res));
router.put('/:id', (req, res) => rolesPermisosController.actualizarRolesPermisos(req, res));
router.delete('/:id', (req, res) => rolesPermisosController.eliminarRolesPermisos(req, res));

module.exports = router;