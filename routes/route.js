import express from 'express'
import { getUser, registerUser, login } from '../controller/userController.js'
const route = express.Router()

route.get('/', getUser)
route.post('/registration', registerUser)
route.post('/login', login)


export default route