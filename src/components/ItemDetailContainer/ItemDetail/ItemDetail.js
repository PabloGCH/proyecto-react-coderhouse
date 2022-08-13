import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount.js";
import {useState} from "react"
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
	const [quantity, setQuantity] = useState(0);
	const handleOnAdd = (num) => {
		setQuantity(num);
	}

	return (
		<div className="ItemDetail">
			<img src={product.imgUrl}/>
			<div className="content">
				<p className="title">{product.title}</p>
				<p className="description">{product.description}</p>
				<p className="price">$ {product.price}</p>
				{
					quantity === 0 ? (
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
