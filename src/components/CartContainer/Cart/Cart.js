import "./Cart.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../../context/CartContext.js"; 

const Cart = () => {
	let {getProducts, getTotalPrice, getQuantity, removeItem} = useContext(CartContext);
	let products = getProducts();
	let quantity = getQuantity();
	const [state, setState] = useState("loaded");
	useEffect(() => {
		products = getProducts();
		quantity = getQuantity();
		setState("loaded")
	}, ["", state]);

	const productsComp = products.map(prod =>
		<tr key = {prod.id}>
			<td>{prod.title}</td>
			<td>{prod.price}</td>
			<td>{prod.quantity}</td>
			<td>
				<button onClick={() => {
					removeItem(prod.id);
					setState("loading");
				}}>-</button>
			</td>
		</tr>
	)
	
	return (
		<>
			{quantity != 0 ?
				<>
				<h2>Products: {quantity}</h2>
				<table className="cartTable">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{productsComp}
						<tr>
							<th>Total Price</th>
							<td>{getTotalPrice()}</td>
							<td></td>
							<td></td>
						</tr>
					</tbody>
				</table>
				<Link className="cartLink" to={"/purchase"}>Finish purchase</Link>
				<Link className="cartLink" to={"/"}>Keep buying</Link>
				</>
				:
				<>
				<h2>There are no products in the cart</h2>
				<Link className="cartLink" to={"/"}>Return to home</Link>


				</>
			}
				
		</>
	)
}
export default Cart;
