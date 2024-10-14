
import { v2 as cloudinary } from 'cloudinary';
import serverConfig from './serverConfig';


    // Configuration
    const cloudinaryS3 = cloudinary.config({ 
        cloud_name: serverConfig.CLOUDINARY_CLOUD_NAME, 
        api_key:serverConfig.CLOUDINARY_API_KEY , 
        api_secret:serverConfig.CLOUDINARY_SECRET_KEY_ID 
    });
    
    export default cloudinaryS3;