import post from "../schema/post.js";


export const createPost = async (caption, image, user) => {
  try {
    const newPost = await post.create({ caption, image, user });
    // const newPost = new Post({caption,image,user});
    // await newPost.save();
    return newPost;
  } catch (error) {
    console.log(error);
  }
};

export const findAllPost = async (offset,limit) => {
  try {
    const posts = await post.find().sort({createdAt:-1 }).skip(offset).limit(limit).populate('user','username email _id');
    return posts;
  } catch (error) {
    console.log(error);
  }
};

export const countAllPosts=async()=>{
    try{ 
        const count=await post.countDocuments();
        return count;
    }catch(error){
        console.log(error);
    }
}

export const findPostById = async (id) => {
  try {
    const Post = await post.findById(id);
    return Post;
  } catch (error) {
    console.log(error);
  }
};

export const deletePostById = async (id) => {
    try {
        const Post = await post.findByIdAndDelete(id);
        return Post;
    } catch(error) {
        console.log(error);
    }
}


export const updatePostById = async (id,updateObject)=>{
    try {
      const Post= await post.findByIdAndUpdate(id,updateObject,{new:true});  
      return Post;
    } catch (error) {
        console.log(error)
    }
}
