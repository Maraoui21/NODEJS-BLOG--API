const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();



// FETCH LABEL BLOGS 

router.get('/:id',async(req,res,next)=>{
    try{
      const {id} = req.params
  
      const blogs = await prisma.blog.findMany({
          where:{labelId: Number(id)}
      })
  
      res.json(blogs)
    } catch(error){
      next(error);
    }
  })

  module.exports = router;
