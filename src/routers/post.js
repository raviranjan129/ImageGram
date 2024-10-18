//here all the post related routes are present;

import express from 'express';
import { S3uploader } from '../config/multerConfig.js';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router(); //Router object to modularize the routes;

router.post('/',S3uploader.single('image'),createPost);

router.get('/',getAllPosts);

export default router;