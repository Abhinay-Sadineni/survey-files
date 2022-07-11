const { json } = require('body-parser');
const express = require('express');

const router = express.Router();

const Post =require('../models/Post');

//Get back all the posts
// router.get('/', async(req, res) => {
//     try{
//          const posts =await Post.find();
//          res.json(posts);
//     }catch(err){
//         res.json({message:err});
//     }
// });

router.get('/add_questions/:postId', async(req, res) => {
    try{
    const post = await Post.findOne({document_name :"Hello we"});
    res.json(post);}
       catch(err){
        res.json({message :err});
       }
 } );

//  router.delete('/:postId', async(req, res) =>{
//     try{
//     const removedPost=await Post.remove({_id:req.params.postId});
// res.json(removedPost);}
// catch(err){
//     res.json({message: err});
// }
//  })

//  router.patch('/:postId', async(req, res)=>{
//     try{
//         const updatedPost =await Post.updateOne({_id: req.params.postId},{$set:{ document_name:req.body.document_name}});
//         res.json(updatedPost);
    
//     }catch(err){
//         res.json({message:err});
//     }
//  })

 //submit the post
 router.post('/add_questions',async(req, res)=>{
    console.log(req.body);
    const data=req.body;
    
    const post =new Post({
        document_name: req.body.document_name,
        doc_desc:req.body.doc_desc,
        questions :req.body.questions
    });
    try{
   const savedPost= await post.save();
    res.json(savedPost);}
    catch(err){
        res.json({message: err});
    }

 });

module.exports = router;
