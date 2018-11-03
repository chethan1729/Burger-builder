import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    
    let transaformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        // console.log('typeof(props.ingredients) => '+typeof(props.ingredients));
        // console.log('props.ingredients = '+JSON.stringify(props.ingredients));
        // console.log('igKey = '+igKey);
        // console.log('props.ingredients[igKey] = '+props.ingredients[igKey]);      
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            // console.log('######');
            // console.log('props.ingredients[igKey] = '+props.ingredients[igKey]);
            // console.log('i = '+i);
            // console.log('{igKey} = '+igKey+i);
            // console.log('######');
            // console.log('*******************************');
            return <BurgerIngredient key={igKey + i} type={igKey} />; 
        }); 
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(transaformedIngredients.length === 0){
        transaformedIngredients = <p> Please start adding ingredients! </p>
    }
    console.log('transaformedIngredients = '+transaformedIngredients);

    return (
       <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transaformedIngredients}
            <BurgerIngredient type="bread-bottom" />       
       </div> 
    );
};

export default burger;