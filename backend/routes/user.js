const express = require('express');
const {User}=require('../db/db.js');
const userauthmiddleware=require('../middleware/userauthmiddleware.js')
const zod = require("zod");
const router = express.Router();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

const signupBody = zod.object({
    username: zod.string().email(),
	firstName: zod.string(),
	lastName: zod.string(),
	password: zod.string()
})

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
})


// router.post('/signin',async(req,res)=>{
//     const { success } = signinBody.safeParse(req.body)
//     if (!success) {
//         return res.status(411).json({
//             message: "Incorrect inputs"
//         })
//     }
//     const username=req.body.username;
//     const password=req.body.password;
//    await User.findOne({
//         username:username
//     }) .then(function(value){
//         if(!value){
//             res.status(403).json({
//                 message: "Error while logging in"
//             })
//         }
        
//     })

//     const token = jwt.sign({
//         username
//     }, JWT_SECRET);

//     res.json({
//         message: "User created successfully",
//         token: token
//     })
// });
const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
   
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }


    res.status(411).json({
        message: "Error while logging in"
    })
})
const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})
    router.put("/",async(req,res) => {
        
        const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
       const decoded = jwt.verify(token, JWT_SECRET);
        // req.userId = decoded.userId;


    const respond= await User.updateOne(req.body, {
        _id: decoded.userId
    })

    res.json({
        message: respond
    })
        
    })
    router.get("/bulk", async (req, res) => {
        const filter = req.query.filter || "";
    
        const users = await User.find({
            $or: [{
                firstName: {
                    "$regex": filter
                }
            }, {
                lastName: {
                    "$regex": filter
                }
            }]
        })
    
        res.json({
            user: users.map(user => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                _id: user._id
            }))
        })
    })
module.exports = router;