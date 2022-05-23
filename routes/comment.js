const router = require('express').Router();
const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();




// create comment

router.post('/add',async (req,res,next)=>{
    try {
        const comment = await prisma.comment.create({
            data:req.body
        })
        res.json(comment)
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


router.patch('/update/:id', async (req,res,next)=>{
    try {
        
        const comment = await prisma.comment.create({
            where:{id:req.params.id}
        })
        res.json(comment)
    } catch (error) {
        next(error)
    }
})


module.exports = router;