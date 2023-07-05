const cartModel = require("../model/cartModel");

const cartRegister = async (req,res) => {
    const data = await cartModel.create(req.body);
    res.status(200).json({
        status : "success",
        data
    })
}

const cartsingleData = async (req,res) => {
    const id = req.params.id;
    const data = await cartModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allcart = async (req,res) => {
    const user = await cartModel.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const usercart= async (req,res) =>{
        var userId = req.params.id; 
    const data = await cartModel.find({"userId" : userId});
    res.status(200).json({
        status:"success",
        data
    });
}

const deletecart= async (req,res) =>{
    var id= req.params.id;
    await cartModel.findByIdAndDelete(id)
    res.status(200).json({
        status:"success",
    });
}

const updatecart= async (req,res) =>{
    var id= req.params.id;
    await commentsModel.updateOne({"id" : id},req.body);

    const data= await commentsModel.find({"id" : id})
    res.status(200).json({
        status:"success",
        data
    });
}

module.exports = {
    cartRegister,
    cartsingleData,
    allcart,
    usercart,
    deletecart,
    updatecart
}