import React,{Component} from 'react';
import Aux from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.css';

class OrderSummary extends Component {

    ComponentWillUpdate (){
        console.log('[OrderSummary] WillUpdate');
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
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
                <p><strong>Total Price : {this.props.price} Rs</strong></p>
                <p> Continue to Checkout</p>
                <div align='center'>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </div>
            </Aux>
        );
    }

}

export default OrderSummary;