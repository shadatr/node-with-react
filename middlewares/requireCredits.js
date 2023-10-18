module.exports= (req,res,next)=>{
    if(req.user.credits<1){
        return res.send({error: "don't have enought credits!"})
    }
    next();
};