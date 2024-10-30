//here all the post related routes are present;

import express from 'express';
import { S3uploader } from '../../config/multerConfig.js';
import { createPost, deletePost, getAllPosts,updatePost } from '../../controllers/postController.js';
import { validate } from '../../validators/zodValidator.js';
import { zodPostSchema } from '../../validators/zodPost.js';
import { isAdmin, isAuthenticated } from '../../middleware/authMiddleware.js';



const router = express.Router(); //Router object to modularize the routes;

router.post('/',isAuthenticated ,S3uploader.single('image'),validate(zodPostSchema),createPost); 

router.get('/',getAllPosts);

router.delete('/:id',isAuthenticated, deletePost);

router.put('/:id',isAuthenticated,isAdmin,S3uploader.single('image'),updatePost)

export default router;