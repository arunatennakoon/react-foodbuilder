import React from 'react';
import classes from './Food.css'
import FoodIngredients from '../../components/Food/FoodIngredients/FoodIngredients';

const Food = (props) =>{
    return(
        <div className = {classes.Food}>
           <FoodIngredients type="bread-top"></FoodIngredients>
           <FoodIngredients type="salad"></FoodIngredients>
           <FoodIngredients type="bread-bottom"></FoodIngredients>
        </div>
    )
}

export default Food;