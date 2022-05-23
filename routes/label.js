const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();


// create label

router.post('/', async (req,res,next)=>{

  try {
    
      const newLabel = await prisma.label.create({
        data:req.body
      })
    res.json(newLabel)

  } catch (error) {
    next(error)
  }

})

// fetch all labels 

router.get('/all', async (req,res,next)=>{
  try {
    const Labels = await prisma.label.findMany({})

    res.json(Labels)
  } catch (error) {
    next(error)
  }  
})




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

  // delete label

  router.delete('/delete/:id' , async (req,res,next)=>{
    try {
      const labelRemove = await prisma.label.delete({
        where:{id: Number(req.params.id)}
      })
      res.json(labelRemove)
    } catch (error) {
      next(error)
    }
  })



  module.exports = router;
