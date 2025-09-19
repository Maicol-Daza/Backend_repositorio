const express = require('express');
const PermisosController = require('../controllers/permisos.controller');

const router = express.Router();
const PermisosController = new PermisosController();

router.get('/', (req, res) => PermisosController.obtenerPermisos(req, res));
router.get('/:id', (req, res) => PermisosController.obtenerPermiso(req, res));
router.post('/', (req, res) => PermisosController.crearPermiso(req, res));
router.put('/:id', (req, res) => PermisosController.actualizarPermiso(req, res));
router.delete('/:id', (req, res) => PermisosController.eliminarPermiso(req, res));

module.exports = router;