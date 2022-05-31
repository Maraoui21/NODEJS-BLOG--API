require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const router = require('express').Router(); 
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

router.post('/' ,  async (req , res ,next)=>{
    const toLog = {email:req.body.email,password:req.body.password};
    const result = await prisma.user.findMany();
    const exist = result.find(user => user.email == toLog.email);
    if(exist == undefined){
        return res.status(404).json({error:'his email is not exist'})
    }
    try {
        
        if(await bcrypt.compare(toLog.password,exist.password)){
            res.status(200).json({id:exist})
        }
        else{
            res.json({error:'Password incorrect'})
        }
    } catch (error) {
        next(error)
    }
    

})




module.exports = router;