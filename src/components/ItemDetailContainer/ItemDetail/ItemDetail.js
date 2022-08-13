import "./ItemDetail.css";
import { useState } from "react"
import { useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../ItemCount/ItemCount.js";
import CartContext from "../../../context/CartContext.js"

const ItemDetail = ({product}) => {
	const {addItem} = useContext(CartContext);
	const [purchaseState, setPurchaseState] = useState("pending");

	const handleOnAdd = (num) => {
		setPurchaseState("finished")
		const newProduct = {
			...product,
			quantity: num
		}
		addItem(newProduct);
	}

	return (
		<div className="ItemDetail">
			<img src={product.imgUrl}/>
			<div className="content">
				<p className="title">{product.title}</p>
				<p className="description">{product.description}</p>
				<p className="price">$ {product.price}</p>
				{
					purchaseState === "pending" ? (
						<ItemCount onAdd={handleOnAdd} stock={product.stock} initial={0}/>
					) : (
						<Link className="linkToCart" to={"/cart"}>Finish purchase</Link>
					)
				}
			</div>
		</div>
	);
}
export default ItemDetail;
