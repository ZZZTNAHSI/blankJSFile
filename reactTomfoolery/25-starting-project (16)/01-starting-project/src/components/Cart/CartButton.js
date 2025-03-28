import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity =  useSelector(state => {
    return state.cart.totalQuantity;
  } );

  function toggleCartHandler () {
    dispatch(uiActions.toggle());
  }
  
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
