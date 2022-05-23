const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const multer = require('multer');
const prisma = new PrismaClient();

const filestorageEngine = multer.diskStorage({
  destination:(req,file,cb) =>{
    cb(null,'./public/img')
  },
  filename:(req,file,cb)=>{
    console.log(file)
    cb(null,Date.now()  + '--' + file.originalname)
  }
})

const upload = multer({storage:filestorageEngine});


// GET ALL BLOGS 

router.get('/blogs', async (req, res, next) => {

  try{

    // all blogs part of a label

    const blogs = await prisma.blog.findMany({
      include: {label:true}
    });


    // // all labels that's contain blogs

    // const label = await prisma.label.findMany({
    //   include: {blogs:true}
    // })


    // res.json({blogs,label})
    res.json(blogs);


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

router.post('/blogs',upload.single("imgUrl") , async (req, res, next) => {
  try {
    const blog = await prisma.blog.create({
      data:{
        title:req.body.title,
        content:req.body.content,
        imgUrl:req.file.filename
      }
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
