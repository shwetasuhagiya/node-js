const commentsModel = require("../model/commentModel");
const postsModel = require("../model/postModel");
const login_Model = require("../model/userModel");

var register= async (req,res)  => {

    var data= await postsModel.create(req.body);

    res.status(200).json({
        status:"sucess",
        data
    })

}
const postsingleData = async (req,res) => {
    const id = req.params.id;
    const data = await postsModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allpost = async (req,res) => {
    const user = await postsModel.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const searchpost= async (req,res) => {

    var srch_data = req.query

    var data = await postsModel.find(srch_data);


   if(data.length == 1){
        res.status(200).json({
        status:"success",
        data
    })
   }else{
    res.status(200).json({
        status:"No Result Found",
    })
   }
    
}

const limitSkippost = async (req,res) => {
    const data = await postsModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status:"success",
        data
    });
}

const userIdpost = async (req,res) => {
    var userId = req.params.id; 
    const data = await postsModel.find({"userId" : userId});
    res.status(200).json({
        status:"success",
        data
    });
}

const userIdcomment = async (req,res) => {
    var userId = req.params.id; 
    const data = await commentsModel.find({"postId" : userId});
    res.status(200).json({
        status:"success",
        data
    });
}



const deletepost= async (req,res) =>{
    var id= req.params.id;
    await postsModel.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatepost= async (req,res) =>{
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
    allpost,
    postsingleData,
    limitSkippost,
    searchpost,
    userIdpost,
    deletepost,
    updatepost,
    userIdcomment
}