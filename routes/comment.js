const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();




// create comment

router.post('/add',async (req,res,next)=>{
    try {
        const comment = await prisma.comment.create({
            data:{
                id:req.body.id,
                email:req.body.email,
                content:req.body.content,
                articleId: Number(req.body.articleId)
            }
        })
        if(comment){
            res.json(comment)
        }else{
            res.json('something wrong please try again')
        }
    } catch (error) {
        next(error)
    }

})


// fecth commnets 

router.get('/', async (req,res,next)=>{
    try {
        
        const comments = await prisma.comment.findMany({
        })

        res.json(comments)

    } catch (error) {
        next(error)
    }
})


// fetch comment by article id

router.get('/:id', async (req,res,next)=>{
    const comments = await prisma.comment.findMany({
        where:{articleId: Number(req.params.id)}
    });
    res.json(comments);
})


router.patch('/update/:id', async (req,res,next)=>{
    try {
        
        const comment = await prisma.comment.create({
            where:{id:Number(req.params.id)}
        })
        res.json(comment)
    } catch (error) {
        next(error)
    }
})


module.exports = router;