const express = require('express');
const {User,Account}=require('../db/db.js');
const userauthmiddleware=require('../middleware/userauthmiddleware.js')
const zod = require("zod");
const router = express.Router();
const mongoose=require('mongoose')
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config.js");

const signinBody = zod.object({
    username: zod.string().email(),
	password: zod.string()
})
router.get("/balance",async(req,res) => {
        

const authHeader = req.headers.authorization;
const token = authHeader.split(' ')[1];
   const decoded = jwt.verify(token, JWT_SECRET);
    

   
    
    if (decoded) {
        const account = await Account.findOne({
            userId: decoded.userId
        });
        
        res.json({
            balance: account.balance
        })
    }

   else{
res.json({
    message: "cant' fetch"
})
   }
    
});

router.post("/transfer", async (req, res) => {
    const session = await mongoose.startSession();

    session.startTransaction();
    const  amount = req.body.amount;
    const  to = req.body.to;
    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.body.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.body.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = router;