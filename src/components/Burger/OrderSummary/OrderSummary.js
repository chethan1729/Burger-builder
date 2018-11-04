import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
                </li>
            );
        });
    return (
        <Aux>
            <div className={classes.OrderFont}>
                <h3> Please review your order :</h3>
            </div>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price} Rs</strong></p>
            <p> Continue to Checkout</p>
            <div align='center'>
                <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
            </div>
        </Aux>
    );
};

export default orderSummary;