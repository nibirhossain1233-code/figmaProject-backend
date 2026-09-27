const customerFavoritesModel = require("../model/customerFavorites.model");

exports.createCustomerFavoritesController = async (req, res) => {

  let CustomerFavorites = await customerFavoritesModel.create(req.body);

  res.status(201).json({
    success: true,
    message: "Customer favorites Created!",
    data: CustomerFavorites,
  });
};

exports.updateCustomerFavoritesController = async (req,res) =>{
    let {id} =  req.params;

    let CustomerFavorites = await customerFavoritesModel.findOneAndUpdate({_id:id}, req.body, {new:true})

    res.status(200).json({success:true,message:"Customer favorites updated!", data:CustomerFavorites})
}
exports.deleteCustomerFavoritesController = async (req,res) =>{
    let {id} =  req.params;

    let CustomerFavorites = await customerFavoritesModel.findOneAndDelete({_id:id}, req.body, {new:true})

    res.status(200).json({success:true,message:"Customer favorites Deleted!", data:CustomerFavorites})
}
exports.getCustomerFavoritesController = async (req,res) =>{

    let CustomerFavorites = await customerFavoritesModel.find();

    res.status(200).json({success:true,message:"Customer favorites data get successfully!", data:CustomerFavorites})
}
