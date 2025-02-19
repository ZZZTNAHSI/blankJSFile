import { currencyFormater } from "../../util/formatting";

export default function CartItem({price, name, quantity, onDecrease, onIncrease}) {
    return (
        <li className="cart-item">
            <p>{name} - {quantity} X {currencyFormater.format(price)}</p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    );
}