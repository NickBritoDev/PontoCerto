import express from "express";
import { createUser } from '../controllers/users/CreateUserController.js'
import { filterAllUser } from '../controllers/users/FilterAllUserController.js'
import { filterUserByID } from '../controllers/users/FilterUserByIdController.js'
import { deleteUser } from '../controllers/users/DeleteUserByIdController.js'
import { editUser } from '../controllers/users/EditUserByIdController.js'

const router = express.Router()

router.post('/', createUser)
router.get('/', filterAllUser)
router.get('/:id', filterUserByID)
router.delete('/:id', deleteUser)
router.patch('/:id', editUser)

export default router;