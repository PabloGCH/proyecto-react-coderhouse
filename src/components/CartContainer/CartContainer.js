import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext.js"; 
import "./CartContainer.css";


const CartContainer = () => {
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
		<div className="CartContainer">
			
			<h1>Cart</h1>
			{quantity != 0 ?
				<>
				<h2>Products: {quantity}</h2>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						{productsComp}
						<tr>
							<th>Total Price</th>
							<td>{getTotalPrice()}</td>
						</tr>
					</tbody>
				</table>
				</>
				:
				<>
				<h2>There are no products in the cart</h2>
				<Link to={"/"}>Return to home</Link>
				</>
			}
				
		</div>
	)
}
export default CartContainer;
