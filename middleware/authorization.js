const jwt = require('jsonwebtoken');
const config = require('config');

const authorization =(req,res,next)=>{
    const token = req.header('x-auth-token');

    if(!token) return res.json({msg: 'no token accces denied '});
    try{
        const decode = jwt.verify(token,config.get('secret_key'));
        req.user = decode
        next()
    }
    catch(e){
        res.json({msg: 'token invalid'})
    }

}

module.exports = authorization;