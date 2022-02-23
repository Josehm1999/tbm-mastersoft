import express from 'express';
import user from '../controllers/user.js';
import auth from '../middlewares/auth.js';
import admin from '../middlewares/admin.js';
import { existingUser, activeStatus } from '../middlewares/user.js';
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
    existingUser,
    roleMidd.getRoleUser,
  ],
  user.registerUser
);
router.post(
  '/registerAdminUser',
  [auth, admin, existingUser],
  user.registerAdminUser
);
router.post(
  '/login',
  [isEmailValid, isPasswordValid, activeStatus],
  user.login
);
router.get('/listUsers/:name?', [auth, admin], user.listAllUser);
router.get(
  '/getRole/:email',
  [auth, isEmailValid, activeStatus],
  user.getUserRole
);
router.get(
  '/findUser/:_id',
  [auth, validId, admin, activeStatus],
  user.findUser
);
router.put('/updateUser', [isNameValid, isEmailValid, isRoleValid,auth, admin, activeStatus], user.updateUser);
router.put(
  '/deleteUser/:_id',
  [auth, validId, admin, activeStatus],
  user.deleteUser
);

export default router;
