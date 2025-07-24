const mongoose=require("mongoose")
const RecipeSchema = new mongoose.Schema({
     name: { type: String, required: true },
        ingredients: [{ type: String, required: true}],
        instructions: { type: String, required: true },
        cookingTime: { type: String,}, // in minutes
        cuisine: {type:String},
 
},{timestamps:true});


module.exports= mongoose.model("Recipe", RecipeSchema);