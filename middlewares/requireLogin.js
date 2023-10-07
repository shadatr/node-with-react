module.exports= (req,res,next)=>{
    if(!req.user){
        return res.status(410).send({error: "you must login!"})
    }
    next();
};