export const validate = (schema)=>{

    return async (req,res,next)=>{
        try {
            console.log(req.body)
            schema.parse(req.body); //this schema is zod created object,parse checks the req wether it validating schema or not;
            next();
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:"validation error",
                errors:error.errors
            })
        }
    }
}