
import "./CartContainer.css";
import Cart from "./Cart/Cart.js";
import CheckOut from "./CheckOut/CheckOut.js";

const CartContainer = () => {
	return (
		<div className="CartContainer">
			<h1>Cart</h1>
			<Cart/>
			<CheckOut/>
		</div>
	)
}
export default CartContainer;
