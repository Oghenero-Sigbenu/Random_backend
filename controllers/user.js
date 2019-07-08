const bcrypt = require('bcryptjs'); //importing bcryptjs
const jwt = require("jsonwebtoken"); //importing jsonwebtoken

const User = require("../models/user");

exports.signup = (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        username
    } = req.body;

    //error message pops up if any field is empty
    if (!firstName || !lastName || !email || !password || !username) {
        res.json({
            msg: "All Fields are required "
        })
    }
    //check if email already exist
    User.findOne({
            where: {
                email
            }
        })
        .then((user) => {
            if (user) {
                res.json({
                    msg: "Email already exist"
                })
            }

            else {
                let hashedPassword;
                try{
                    const salt = bcrypt.genSaltSync(10);
                    hashedPassword = bcrypt.hashSync(password, salt);
                } catch(error) {
                    throw error;
                }
                //if a uaer has an admin role 
                let role = req.params.admin == "admin" ? "admin" : "user";
                
            //creatint a user
            User.create({
                firstName,
                lastName,
                email,
                username,
                password: hashedPassword,
                role
            })
            .then( user => {
                //assigning a token
                const token = jwt.sign({id: user.id},  process.env.AUTH_SECRET_KEY, { expiresIn: "24h" })
                const authenticatedUser = {
                    id: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    username: user.username
                }
                return res.json({
                    access_token: token,
                    user: authenticatedUser
                });
            })
            .catch(err => res.json({ msg: err.message || "failed to create account" }))
            }
        })
        .catch(err => res.json({ msg: err.message || "failed to create account" }));

};


exports.getAllUser = (req, res, next) => {
    User.findAll()
        .then(user => {
            res.json(user)
        })
        .catch(err => res.json({ msg: "failed" }))
}

exports.getAllAdmin = (req, res, next) => {
    User.find({
        role: "admin",
        })
        .then(user => {
            res.json(user);
        })
        .catch(err => res.json({ msg: "failed" }))
}