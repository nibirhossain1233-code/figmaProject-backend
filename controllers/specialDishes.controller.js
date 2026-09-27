const specialDishesModel = require("../model/specialDishes.model");

exports.createSpecialDishesController = async (req, res) => {

  let specialDishes = await specialDishesModel.create(req.body);

  res.status(201).json({
    success: true,
    message: "Special dishes Created!",
    data: specialDishes,
  });
};

exports.updateSpecialDishesController = async (req,res) =>{
    let {id} =  req.params;

    let specialDishes = await specialDishesModel.findOneAndUpdate({_id:id}, req.body, { returnDocument: 'after' });

    res.status(200).json({success:true,message:"Special Dishes updated!", data:specialDishes});
}
exports.deleteSpecialDishesController = async (req,res) =>{
    let {id} =  req.params;

    let specialDishes = await specialDishesModel.findOneAndDelete({_id:id}, req.body, { returnDocument: 'after' });

    res.status(200).json({success:true,message:`${specialDishes.name}'s data is deleted from Special Disheses data!`});
}
exports.getSpecialDishesController = async (req,res) =>{

    let specialDishes = await specialDishesModel.find();

    res.status(200).json({success:true,message:"Special Dishes data get successfully!", data:specialDishes});
}
