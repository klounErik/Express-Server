const jwt = require('jsonwebtoken')

const verifyUser = (req, res, next) => {
    
    const auth = req.headers.authorization
   
    if(auth){
        const header = auth.split('bearer ')
        jwt.verify(header[1], process.env.SECRET, (err, token) => {
            if(err){
                res.status(403).send('Invalid credentials')
            } else {
                next()
            }
        })
    }else {
        res.sendFile(__dirname + '/index.html')
    }
}

module.exports = verifyUser