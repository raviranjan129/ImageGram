import multer from "multer";
import multerS3 from "multer-s3";
import { s3 } from "./awsConfig.js";
import { AWS_BUCKET_NAME } from "./serverConfig.js";
export const S3uploader = multer({
  storage: multerS3({
    s3: s3,
    bucket: AWS_BUCKET_NAME,

    key: function (req, file, cb) {
      //key function -> regulate how the file should be uploaded on s3
      console.log(file);
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9); // to make sure the key is unique; suppose we upload same image twice

      cb(
        null,
        file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
      ); //error first callback;
    },
  }),
}); //uploader is a middleware;
