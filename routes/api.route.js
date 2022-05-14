const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();


// GET ALL BLOGS 

router.get('/blogs', async (req, res, next) => {

  try{

    // all blogs part of a label

    const blogs = await prisma.blog.findMany({
      include: {label:true}
    });


    // all labels that's contain a blogs

    const label = await prisma.label.findMany({
      include: {blogs:true}
    })


    res.json({blogs,label})

  } catch(error){
    next(error)
  }


});

// GET BLOGS WITH ID 

router.get('/blogs/:id', async (req, res, next) => {
  try {
    const {id} = req.params
    const blog = await prisma.blog.findUnique({
      where:{id: Number(id)}
    })

    res.json(blog)
  
  } catch (error) {
    next(error)
  }
});


// POST A BLOG

router.post('/blogs', async (req, res, next) => {

  try {

    const blog = await prisma.blog.create({
      data: req.body
      // {
      //   title: req.body.name,
      //   content: req.body.content,
      //   labelId: req.body.label
      // }
    })

    res.json(blog)


  } catch (error) {
    next(error)
  }

});


// DELETE A BLOG 

router.delete('/blogs/:id', async (req, res, next) => {
  
  try {
    const {id} = req.params
    const deletedBlog = await prisma.blog.delete({
      where:{id: Number(id)}
    })

    res.json(blog)
  
  } catch (error) {
    next(error)
  }

});


// UPDATE A BLOG

router.patch('/blogs/:id', async (req, res, next) => {

  try {
    const {id} = req.params
    const UpdatedBlog = await prisma.blog.update({
      where:{
        id: Number(id)
      },
      data:req.body
    })

    res.json(UpdatedBlog)


  } catch (error) {
    next(error)
  }

});

module.exports = router;
