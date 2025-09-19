const jwt = require('jsonwebtoken');
function validarToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ mensaje: 'Token requerido' });

    jwt.verify(token, process.env.JWT_SECRET || 'secreto', (err, decode) =>{
    if (err) return res.status(401).json({ mensaje: 'Token inválido' });
        req.user = decode;// datos del usuario
        next();
    });
}
module.exports = validarToken;