import { createPost, findAllPost } from "../repositories/postRepository.js";
import { countAllPosts } from "../repositories/postRepository.js";
 export const createPostService = async (createPostObject)=>{
//1. Take the image of the post and upload on aws 

//2. get the url of the image from the aws response 

//3. create  a post with the caption and the image url in the db using repository 

//4 Return the post object

const caption = createPostObject.caption?.trim();
const image=createPostObject.image;
// const user=createPostObject.user;


const post = await createPost(caption,image);
return post;
}

export const getAllPostsService= async(offset,limit)=>{
    const posts = await findAllPost(offset,limit);

    //calculate total number of posts and total number of pages

    const totalDocuments = await countAllPosts();

    const totalPages=Math.ceil(totalDocuments/limit);

    return{
        posts,totalPages,totalDocuments
    }
}