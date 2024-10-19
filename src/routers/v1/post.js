//here all the post related routes are present;

import express from 'express';
import { S3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts,updatePost } from '../../controllers/postController.js';



const router = express.Router(); //Router object to modularize the routes;

router.post('/',S3uploader.single('image'),createPost);

router.get('/',getAllPosts);

router.delete('/:id', deletePost);

router.put('/:id',S3uploader.single('image'),updatePost)

export default router;