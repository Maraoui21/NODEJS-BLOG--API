const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


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
            data:req.body
          })
          res.json(user)
    } catch (error) {
        next(error)
    }
});


// // DELETE USER

// router.delete('/remove/:id', async (req, res, next) => {
  
//     try {
//       const deletedUser = await prisma.user.delete({
//         where:{id: Number(req.params.id)}
//       })
//       res.json(deletedUser)
    
//     } catch (error) {
//       next(error)
//     }
  
//   });




module.exports = router;