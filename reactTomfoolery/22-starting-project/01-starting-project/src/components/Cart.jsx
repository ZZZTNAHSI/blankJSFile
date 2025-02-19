import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import { currencyFormater } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./UI/CartItem";
export default function Cart() {
    const cartctx = useContext(CartContext);
    const cartTotal = cartctx.items.reduce((total, item) => total + item.quantity * item.price, 0)
    const userProgressCtx = useContext(UserProgressContext);
    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout(); 
    }
    
    

    return (
        <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseCart: null}>
            <h2>your Cart</h2>
            <ul>
            {cartctx.items.map(item => <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onIncrease={() => cartctx.addItem(item)} onDecrease={() => cartctx.removeItem(item.id)}/>)}
            </ul>
            <p className="cart-total">{currencyFormater.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button textOnly onClick={handleCloseCart} > Close</Button>
                {cartctx.items.length > 0 && <Button onClick={handleGoToCheckout}> Go to Checkout</Button>}
            </p>
        </Modal>
    );
}