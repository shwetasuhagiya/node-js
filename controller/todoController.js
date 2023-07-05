const todosModel = require("../model/todoModel");

var register= async (req,res)  => {

    var data= await todosModel.create(req.body);

    res.status(200).json({
        status:"sucess",
        data
    })

}
const todosingleData = async (req,res) => {
    const id = req.params.id;
    const data = await todosModel.find({"id" : id});

    res.status(200).json({
        status:"success",
        data
    })
}

const alltodo = async (req,res) => {
    const user = await todosModel.find();
    res.status(200).json({
        status: "success",
        user
    })
}

const randomtodo= async (req,res) =>{
    const data=await todosModel.aggregate([{ $sample : {size:1}}]);

    res.status(200).json({
        status: "success",
        data
    })
}

const limitSkiptodo = async (req,res) => {
    const data = await todosModel.find().limit(req.query.limit).skip(req.query.skip);
    res.status(200).json({
        status:"success",
        data
    });
}


const deletetodo= async (req,res) =>{
    var id= req.params.id;
    await todosModel.deleteOne({"id" : id})
    res.status(200).json({
        status:"success",
    });
}

const updatetodo= async (req,res) =>{
    var id= req.params.id;
    await todosModel.updateOne({"id" : id},req.body);

    const data= await todosModel.find({"id" : id})
    res.status(200).json({
        status:"success",
        data
    });
}

module.exports={
    register,
    todosingleData,
    alltodo,
    randomtodo,
    limitSkiptodo,
    deletetodo,
    updatetodo
}