
import jsonwebtoken from 'jsonwebtoken'

export const validate = (req, res, next)=>{
    const token = req.header('auto-token')
    if(!token) return res.status(401).json({'err' : 'Not logged in'})
    try {
        const verified = jsonwebtoken.verify(token, process.env.WEB_TOKEN) // this returns value of which we set the token to
    } catch (error) {
        res.status(401).json({'err' : 'Not logged in'})
    }
    next()
}

