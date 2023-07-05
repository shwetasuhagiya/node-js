const cartModel = require("../model/cartModel");
const postsModel = require("../model/postModel");
const login_Model = require("../model/userModel");
var jwt = require('jsonwebtoken');

const enterData = async ( req, res ) => {
    const select = await login_Model.find({"email":req.body.email});

    if(select.length == 0){
        const data = await login_Model.create(req.body);

        res.status(200).json({
            status: "success",
            data
        })
    }else{
        res.status(200).json({
            status: "your email is already declair",
        })
    } 
}

const userLogin = async ( req,res ) => {
    const data = await login_Model.find({"email": req.body.email});
    var token = jwt.sign({ id : req.body.id }, 'data');

    const email = data[0].email; 
    const id = data[0].id;
    const username = data[0].username;
    const firstName = data[0].firstName;
    const lastName = data[0].lastName;
    const gender = data[0].gender;
    const image = data[0].image;

    if(data.length == 1)
    {
        if(data[0].password == req.body.password)
        {
            res.status(200).json({
                id,
                username,
                email,
                firstName,
                lastName,
                gender,
                image,
                token
            })
        }else
        {
            res.status(200).json({
                status : "Check your Password"
            })
        }
    }else
    {
        res.status(200).json({
            status : "Check Your Email"
        })
    }
}

const singleData = async (req,res) => {
    const id = req.params.id;
    const data = await login_Model.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allUsers = async (req,res) => {
    const user = await login_Model.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const searchData = async (req,res) => {

    var srch_data = req.query

    var data = await login_Model.find(srch_data);


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

const limitSkipUser = async (req,res) => {
    const data = await login_Model.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status:"success",
        data
    });
}

const userIdCart = async (req,res) => {
    var userId = req.params.id; 
    const data = await cartModel.find({"userId" : userId});
    res.status(200).json({
        status:"success",
        data
    });
}

const userIdtodo = async (req,res) => {
    var userId = req.params.id; 
    const data = await todosModel.find({"userId" : userId});
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

const deleteuser= async (req,res) =>{
    var id= req.params.id;
    await login_Model.findByIdAndDelete(id)
    res.status(200).json({
        status:"success",
    });
}

const updateuser= async (req,res) =>{
    var id= req.params.id;
    await commentsModel.updateOne({"id" : id},req.body);

    const data= await commentsModel.find({"id" : id})
    res.status(200).json({
        status:"success",
        data
    });
}

module.exports = {
    enterData,
    userLogin,
    allUsers,
    singleData,
    searchData,
    limitSkipUser,
    userIdCart,
    deleteuser,
    updateuser,
    userIdpost,
    userIdtodo
}