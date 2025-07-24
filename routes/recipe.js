const express=require("express");
const { getRecipes,getRecipeById,addRecipe,editRecipe,deleteRecipe} = require("../controller/recipe");
const router=express.Router();

router.get("/",getRecipes)          //get all recipes
router.get("/:id",getRecipeById)    //get recipe
router.post("/",addRecipe)          //add recipe
router.put("/:id",editRecipe)       //edit recipe
router.delete("/:id",deleteRecipe)  //delete recipe
module.exports=router