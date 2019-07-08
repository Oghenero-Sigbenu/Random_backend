const jwt = require("jsonwebtoken");
const User = require("../models/user");

//user authentication
const authenticate = (req, res, next) => {
    const token = getToken(req);

    //if user does not have a token
    if(!token) {
        res.status(400).json({
        msg : err.message || "Token Required"
        });
    }else{
        //verify token if its still valid
        jwt.verify(token, process.env.AUTH_SECRET_KEY, function (err, decoded){
            if(err) {
                return res.status(401).json({
                    msg: "Invalid Token",
                    error: err
                })
            }
            User.findByPk(decoded.userId)
                .then(user => {
                    req.user = user;
                    req.user.role = user.role;
                    return next();
                }).catch(err => {
                    return res.json({msg : err.message || "Error occured"})
                });
        });
    }
     
};

//splitting the token
const getToken = (req) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }else if(req.query && req.query.token) {
        return req.query.token
    }
    return null;
}

module.exports = authenticate;