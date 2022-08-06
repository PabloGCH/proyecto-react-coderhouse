import "./ItemDetail.css";
import ItemCount from "../../ItemCount/ItemCount.js";

const ItemDetail = ({product, onAdd}) => {
	return (
		<div className="ItemDetail">
			<img src={product.imgUrl}/>
			<div className="content">
				<p className="title">{product.title}</p>
				<p className="description">{product.description}</p>
				<p className="price">$ {product.price}</p>
				<ItemCount onAdd={onAdd} stock={product.stock} initial={0}/>
			</div>
		</div>
	);
}
export default ItemDetail;
