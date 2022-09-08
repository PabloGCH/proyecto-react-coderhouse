import "./CheckOut.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.js";
import { fsCreateOrder } from "../../firestore.js";
import PurchaseForm from "./PurchaseForm/PurchaseForm.js";


const CheckOut = () => {
	const {getQuantity, getTotalPrice, getProducts, clear} = useContext(CartContext);
	let quantity = getQuantity();
	const [outOfStockMessage, setOutOfStockMessage] = useState();
	const [operationId, setOperationId] = useState("");
	const [buyerData, setBuyerData] = useState("");
	const [loading, setLoading] = useState(false);
	const createOrder = async () => {
		const objOrder = {
			buyer: {
				...buyerData,
			},
			items: getProducts(),
			totalQuantity: getQuantity(),
			total: getTotalPrice(),
			date: new Date()
		}
		clear();
		setLoading(true);
		let result = await fsCreateOrder(objOrder);
		if(result[0]) {
			result[1].then(res => {
				setOperationId(res.id);
			})	
		} else {
			setOutOfStockMessage(result[1].map(prod => <li key={prod.id}>{prod.title}</li>))
			setOperationId("failed");
		}
		setLoading(false);
	}
	return (

		<div className="CheckOut">
			{
				loading && <p className="loadingMessage">Loading...</p>
			}
			{buyerData == "" ? 
				(
					<>
					<h2>Please fill the the form to complete your purchase</h2>
					<PurchaseForm setDataFunc={setBuyerData}/>
					</>
				)
				:
				(quantity != 0 &&
					<>
					<h2>Only one more click!</h2>
					<button className="genBtn" onClick={() => createOrder()}>Generate order</button>
					</>
				)
			}
			{
				operationId != "" &&

				(
					operationId != "failed" ?
					<>
						<p>Operation Completed</p>
						<p>Thanks for your purchase!!</p>
						<p>The ID of your operation is: "{operationId}".</p>
					</>
				:
					<>
						<p>The operation failed</p>
						<p>The following items are out of stock</p>
						<ul>
							{outOfStockMessage}
						</ul>
					</>

				)
			}
			
		</div>
	)
}
export default CheckOut;





/*
			{
				operationId != "" &&

				(
					operationId != "failed" ?
					<>
						<p>Operation Completed</p>
						<p>Thanks for your purchase!!</p>
						<p>The ID of your operation is: "{operationId}".</p>
					</>
				:
					<>
						<p>The operation failed</p>
						<p>The following items are out of stock</p>
						<ul>
							{outOfStockMessage}
						</ul>
					</>

				)
			}
			{
				quantity != 0 && <button onClick={() => createOrder()}>Generate order</button>
			}
*/

