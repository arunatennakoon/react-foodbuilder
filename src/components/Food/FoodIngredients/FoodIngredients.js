import React from 'react';
import classes from './FoodIngredients.css'

const FoodIngredients = (props) => {

    let ingredients = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredients = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredients = <div className={classes.BreadTop}>
                <div className={classes.Seeds1}></div>
                <div className={classes.seeds2}></div>
            </div>;
            break;
        case ('seeds1'):
            ingredients = <div className={classes.Seeds1}></div>;
            break;
        case ('seeds2'):
            ingredients = <div className={classes.Seeds2}></div>;
            break;
        case ('meat'):
            ingredients = <div className={classes.Meat}></div>;
            break;
        case ('cheese'):
            ingredients = <div className={classes.Cheese}></div>;
            break;
        case ('salad'):
            ingredients = <div className={classes.Salad}></div>;
            break;
        case ('bacon'):
            ingredients = <div className={classes.Bacon}></div>;
            break;
        case ('style'):
            ingredients = <div className={classes.style}></div>;
            break;
        case ('default'):
        default:
            ingredients = null;
    }
    return ingredients;
}


export default FoodIngredients;