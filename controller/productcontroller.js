const productModel = require("../model/productModel");

var register= async (req,res)  => {

    var data= await productModel.create(req.body);

    res.status(200).json({
        status:"sucess",
        data
    })
}
const productsingleData = async (req,res) => {
    const id = req.params.id;
    const data = await productModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const allproduct = async (req,res) => {
    const user = await productModel.find();

    res.status(200).json({
        status: "success",
        user
    })
}

const searchproduct= async (req,res) => {

    var srch_data = req.query

    var data = await productModel.find(srch_data);


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

const limitSkipproduct = async (req,res) => {
    const data = await productModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status:"success",
        data
    });
}

const productcategories = async (req,res) => {

    const data = await productModel.find({},{"category" : 1 , "_id":0});
    res.status(200).json({
        status:"success",
        data
    });
}

const categories= async (req,res) =>{

    var id= req.params.id;

    const data= await productModel.find({"category" : id});
    res.status(200).json({
        status:"success",
        data
    })

}

const deleteproduct= async (req,res) =>{
    var id= req.params.id;
    await productModel.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updateproduct= async (req,res) =>{
    var id= req.params.id;
    await productModel.updateOne({"id" : id},req.body);

    const data= await productModel.find({"id" : id})
    res.status(200).json({
        status:"success",
        data
    });
}

module.exports={
    register,
    allproduct,
    productsingleData,
    searchproduct,
    limitSkipproduct,
    deleteproduct,
    updateproduct,
    productcategories,
    categories
}