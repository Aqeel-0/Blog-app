import express from 'express'
import { getData, postData, getSpecificData, updatePost, deletePost, likePost, commentPost } from '../controller/postController.js'
import {validate} from '../validation-joi/token_auth.js'
const postRoute = express.Router()

postRoute.get('/', getData)
postRoute.get('/post', getSpecificData)
postRoute.post('/',  validate, postData)
postRoute.delete('/:postId', validate, deletePost)

// likes handling
postRoute.patch('/:postId', validate, likePost)

postRoute.patch('/edit/:postId',validate, updatePost)

//comment
postRoute.patch('/post/:postId', validate, commentPost)



export default postRoute