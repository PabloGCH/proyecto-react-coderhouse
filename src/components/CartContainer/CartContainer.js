
import "./CartContainer.css";
import Cart from "./Cart/Cart.js";
import {Link} from "react-router-dom";

const CartContainer = () => {
	return (
		<div className="CartContainer">
			<h1>Cart</h1>
			<Cart/>
			<Link className="link" to={"/purchase"}>Finish purchase</Link>
			<Link className="link" to={"/"}>Keep buying</Link>
		</div>
	)
}
export default CartContainer;
