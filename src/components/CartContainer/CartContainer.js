
import "./CartContainer.css";
import Cart from "./Cart/Cart.js";
import {Link} from "react-router-dom";

const CartContainer = () => {
	return (
		<div className="CartContainer">
			<h1>Cart</h1>
			<Cart/>
		</div>
	)
}
export default CartContainer;
