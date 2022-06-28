const pool = require('../config/db');
const expensesModel = require('../models/categoriesModels');


const controllers = {};

const getCategories = async (req, res) => {
    const {id} = req.params;
    const result = await expensesModel.getCategoriesFromUser(id);
    res.json({message: 'Categories retrieved succesfully', body: {categories: result}});
}

const AddCategory = async (req, res) => {
    const { category_name,user_id } = req.body;
    const result = await expensesModel.addCategory(category_name,user_id);
    res.json({message: 'Category added succesfully', body: {categories: result}});
}

const DeleteCategory = async (req, res) => {
    const { category_id,user_id } = req.body;
    const result = await expensesModel.deleteCategory(category_id,user_id);
    res.json({message: 'Category deleted succesfully', body: {categories: result}});
}

const UpdateCategory = async (req, res) => {
    const { category_id,category_name,user_id } = req.body;
    const result = await expensesModel.updateCategory(category_id,category_name,user_id);
    res.json({message: 'Category updated succesfully', body: {categories: result}});
}


controllers.getCategories = getCategories;
controllers.AddCategory = AddCategory;
controllers.DeleteCategory = DeleteCategory;
controllers.UpdateCategory = UpdateCategory;

module.exports = controllers;
