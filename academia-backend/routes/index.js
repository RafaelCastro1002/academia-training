import express from 'express';
import UsuarioController from '../Controllers/usuarioController'

const router = express.Router();

const UsuarioCtrl = new UsuarioController()

function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      var err = new Error('You must be logged in to view this page.');
      err.status = 401;
      return next(err);
    }
  }

router.post('/cadastro', UsuarioCtrl.cadastro)

router.get('/login/:email/:senha', UsuarioCtrl.login)

router.get('/logout', UsuarioCtrl.logout);

export default router;
