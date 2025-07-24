const Recipe = require("../model/recipeSchema")
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json({ recipes })
    } catch (error) {
        res.status(500).json({ message: "Error", err });
    }

}

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        res.json({ recipe });

    } catch (error) {
        res.status(500).json({ message: "Error", err });
    }

}
const addRecipe = async (req, res) => {
    const { name, ingredients, instructions, cookingTime, cuisine } = req.body;
    try {
        if (!name || !ingredients || !instructions) {
            res.json({ message: "Required fields cannot be empty" })
        }
        const newRecipe = new Recipe({
            name, ingredients, instructions, cookingTime, cuisine
        });
        await newRecipe.save();
        res.json({ message: "Recipe added" })
    } catch (err) {
        res.status(500).json({ message: "Error", err });
    }
}
const editRecipe = async (req, res) => {
    const { name, ingredients, instructions, cookingTime, cuisine } = req.body;
    let recipe = await Recipe.findById(req.params.id);
    try {
        if (recipe) {
            await Recipe.findOneAndUpdate({ _id: req.params.id }, req.body);
            res.json({ message: "Recipe updated" })
        }
    }
    catch (error) {
        res.status(404).json({ message: "Recipe not found", error });
    }
}
const deleteRecipe = async (req, res) => {
    try {
        await Recipe.deleteOne({ _id: req.params.id })
        res.json({ message: "Recipe deleted" })
    }
    catch (err) {
        return res.status(400).json({ message: "error" })
    }
}
module.exports = { getRecipes, getRecipeById, addRecipe, editRecipe, deleteRecipe }