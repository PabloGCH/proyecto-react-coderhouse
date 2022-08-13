import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd}) => {
	const [count, setcount] = useState(parseInt(initial));
	

	const increment = () => {
		if(count < stock) {
			setcount(count + 1);
		}
	}
	const decrement = () => {
		if(count > 0) {
			setcount(count - 1);
		}
	}
	const add = () => {
		if(count > 0) {
			onAdd(count);
		}
	}
	return (
		<div className="ItemCount">
			<div className="controler">
				<div>
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
				</div>
				<span>{count}</span>
			</div>
			<button className="addButton" onClick={add}>Add to Cart</button>
		</div>
	)
}
export default ItemCount;
