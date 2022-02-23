import express from 'express';
import user from '../controllers/user.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';
import userMidd from '../middlewares/user.js';
import roleMidd from '../middlewares/role.js';
import validId from '../middlewares/validId.js';
import {
  isPasswordValid,
  isEmailValid,
  isRoleValid,
  isNameValid,
} from '../middlewares/validations.js';

const router = express.Router();

router.post(
  '/register',
  [
    isNameValid,
    isEmailValid,
    isPasswordValid,
    userMidd.existingUser,
    roleMidd.getRoleUser,
  ],
  user.registerUser
);
router.post('/registerAdminUser', [isNameValid, auth, admin], user.registerAdminUser);
router.post('/login', [isEmailValid, isPasswordValid], user.login);
router.get('/listUsers/:name?', [auth, admin], user.listAllUser);
router.get('/getRole/:email', [auth, isEmailValid], user.getUserRole);
router.get('/findUser/:_id', [auth, validId, admin], user.findUser);
router.put('/updateUser', [isNameValid, auth, admin], user.updateUser);
router.put('/deleteUser/:_id', [auth, validId, admin], user.deleteUser);

export default router;
