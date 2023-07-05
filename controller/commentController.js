const commentsModel = require("../model/commentModel");
const postsModel = require("../model/postModel");


const register=async (req,res) =>{

    const data= await commentsModel.create(req.body);

    res.status(200).json({
        status:"sucess",
        data
    })

}

const allcomment = async (req,res) => {
    const user = await commentsModel.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const comsingleData = async (req,res) => {
    const id = req.params.id;
    const data = await commentsModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const limitSkipcomment = async (req,res) => {
    const data = await commentsModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status:"success",
        data
    });
}

const useridcomment = async (req,res) => {
    var userId = req.params.id; 
    const data = await commentsModel.find({"postId" : userId});
    res.status(200).json({
        status:"success",
        data
    });
}

const deletecomment= async (req,res) =>{
    var id= req.params.id;
    await commentsModel.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatecomment= async (req,res) =>{
    var id= req.params.id;
    await commentsModel.updateOne({"id" : id},req.body);

    const data= await commentsModel.find({"id" : id})
    res.status(200).json({
        status:"success",
        data
    });
}


module.exports={
    register,
    allcomment,
    comsingleData,
    limitSkipcomment,
    useridcomment,
    deletecomment,
    updatecomment

}