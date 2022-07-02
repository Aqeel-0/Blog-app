import { blogdb } from "../model/database.js"
import { postSchema } from '../validation-joi/validation.js'
import joi from 'joi'
import jsonwebtoken from 'jsonwebtoken'


export const getData = async (req, res)=>{
    try {
        const data = await blogdb.find({})
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json({'err': err})
    }
}

export const getSpecificData = async(req, res)=>{
    const {id} = req.body

    try {
        const result = await blogdb.findById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({'err': error})
    }
    
}

export const postData = async(req, res)=>{
    const data = req.body
    
    const new_data = new blogdb({
        title: data.title, 
        image: data.image,
        body:  data.body,
    })
    const {error, value} = joi.validate(data, postSchema)
    if(error) return res.status(400).json({"err": error.details[0].message})

    try {
        const result = await new_data.save()
        res.status(202).json({"result": result})
    } catch (error) {
       res.status(404).json({"err": error._message})
    }
}


export const updatePost = async(req, res)=>{
    const identifier = req.params.postId
    const data = req.body

    try {
        const result = await blogdb.findByIdAndUpdate(identifier, data, {new: true}) 
        res.status(202).json({"result": 'post updated'})
    } catch (error) {
        res.json({"Error": error})
    }

}

export const deletePost = async(req, res)=>{
    const identifier = req.params.postId
    console.log(identifier)
    try {
        const result = await blogdb.findByIdAndDelete(identifier)
        if(result) res.status(202).json({'deleted': result})
        else res.status(404).end("Does't exists on database")
        
    } catch (error) {
        res.json({"Error": error})
    }

}


export const likePost = async (req, res)=>{
    const identifier = req.params.postId
    const token = req.header('auto-token')
    const verified = jsonwebtoken.verify(token, process.env.WEB_TOKEN) // the userId who liked the post
    
    let post = await blogdb.findById(identifier)
    
    if(verified._id in post.likes) {
        delete post.likes[verified._id]
        await blogdb.findByIdAndUpdate(identifier, {likes: post.likes, likes_count: post.likes_count-1})
        return res.status(201).json({'message': 'disliked'})
    }
    post.likes[verified._id] = true 
    const s = await blogdb.findByIdAndUpdate(identifier, {likes: post.likes, likes_count: post.likes_count+1})
    res.status(201).json({'message': 'liked'})
}

export const commentPost = async (req, res)=>{
    const data = req.body.input
    console.log(data)
    const identifier = req.params.postId
    const token = req.header('auto-token')
    const verified = jsonwebtoken.verify(token, process.env.WEB_TOKEN)
    
    try {
        const post = await blogdb.findById(identifier)
        
        if(verified._id in post.comment){
            post.comment[verified._id].push(data)
        }
        else post.comment[verified._id] = [data]
        const result = await blogdb.findByIdAndUpdate(identifier, post, {new: true})
        res.status(202).json({'message': 'comment added', result})
    } catch (error) {
        res.status(401).json({'error': 'something happened'})
    }
    
}