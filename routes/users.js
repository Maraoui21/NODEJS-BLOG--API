const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');

async function hashPassword(password){
    const salt = await bcrypt.genSalt(6);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}



// fetch all users

router.get('/', async (req,res,next)=>{
    try {
        const users = await prisma.user.findMany({
        })
        res.json(users);
    } catch (error) {
        next(error)
    }
});



// create user
router.post('/add', async (req,res,next)=>{
    try {
        
        const user = await prisma.user.create({
            data:{
              email:req.body.email,
              name:req.body.name,
              password: await hashPassword(req.body.password)
            }

          })
          res.json(user)
    } catch (error) {
        next(error)
    }
});



// // DELETE USER

router.delete('/remove/:id', async (req, res, next) => {
    try {
      const deletedUser = await prisma.user.delete({
        where:{id: Number(req.params.id)}
      })
      if(deletedUser){
        res.json('USER IS DELETED');
      }else{
        res.json('SOMETHING WRONG TRY AGAIN');
      }
    
    } catch (error) {
      next(error)
    }
  
  });




module.exports = router;