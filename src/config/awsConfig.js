import AWS from 'aws-sdk';
import serverConfig from './serverConfig';

const s3=new AWS.s3({
    region:serverConfig.AWS_REGION,
    accessKeyId:serverConfig.AWS_ACCESS_KEY_ID,
    secretAccessKey:serverConfig.AWS_SECRET_ACCESS_KEY
})

export default s3;