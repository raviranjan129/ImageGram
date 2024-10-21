import { signupUserService } from "../services/userService.js"

export  async function getProfile(req,res){
    return res.status(501).json({
        success:false,
        message:"Note implemented"
    })

}


export async function signup(req,res){
    try{
        const user = await signupUserService(req.body);
        return res.status(201).json({
            success:true,
            message:"user created successfully",
            data:user
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal server Error"
        })
    }
}