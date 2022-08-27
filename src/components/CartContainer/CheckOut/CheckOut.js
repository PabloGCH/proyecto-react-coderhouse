import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext.js";
import { fsCreateOrder } from "../../../firestore.js";

const CheckOut = () => {
	const {getQuantity, getTotalPrice, getProducts, clear} = useContext(CartContext);
	let quantity = getQuantity();
	const [outOfStockMessage, setOutOfStockMessage] = useState();
	const [operationId, setOperationId] = useState("");
	
	const createOrder = async () => {
		const objOrder = {
			buyer: {
				firstName: "pablo",
				lastName: "choconi",
				phone: "1234567",
				address: "direccion 2389"
			},
			items: getProducts(),
			totalQuantity: getQuantity(),
			total: getTotalPrice(),
			date: new Date()
		}
		clear();
		let result = await fsCreateOrder(objOrder);
		if(result[0]) {
			result[1].then(res => {
				setOperationId(res.id);
			})	
		} else {
			setOutOfStockMessage(result[1].map(prod => <li key={prod.id}>{prod.title}</li>))
			setOperationId("failed");
		}
	}
	return (
		<div>
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
		</div>
	)
}
export default CheckOut;
