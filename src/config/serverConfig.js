import dotenv from 'dotenv';
import { CLOUDINARY_API_KEY } from './serverConfig';


dotenv.config();

export const DB_URL=process.env.DB_URL;

export const CLOUDINARY_SECRET_KEY_ID=process.env.CLOUDINARY_SECRET_KEY_ID;

export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY;

export const CLOUDINARY_CLOUD_NAME=process.env.CLOUDINARY_CLOUD_NAME;