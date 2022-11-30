import { Router } from 'express';
import FindUserByIdController from '@User/Controllers/FindUserByIdController';
import FindAllUsersController from '@User/Controllers/FindAllUsersController';
import CreateUserController from '@User/Controllers/CreateUserController';
import AuthController from '@User/Controllers/AuthController';
import UpdateUserController from '@User/Controllers/UpdateUserController';
import DeleteUserController from '@User/Controllers/DeleteUserController';
import FindUserByNameController from '@User/Controllers/FindUserByNameController';
import authMiddleware from '@Src/Middlewares/AuthMiddleware';

const userRoutes = Router();

userRoutes.post('/auth', AuthController.handle);
userRoutes.get('/users', authMiddleware, FindAllUsersController.handle);
userRoutes.get('/user', authMiddleware, FindUserByIdController.handle);
userRoutes.post('/user', CreateUserController.handle);
userRoutes.put('/user', authMiddleware, UpdateUserController.handle);
userRoutes.delete('/user', authMiddleware, DeleteUserController.handle);
userRoutes.get('/user/:name', authMiddleware, FindUserByNameController.handle);

export default userRoutes;
