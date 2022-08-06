import "./Item.css";
import {Link} from "react-router-dom"

const Item = ({product}) => {
	return (
		<Link to={`/item/${product.id}`} className="Item">
			<img src={product.imgUrl}/>
			<h5>{product.title}</h5>
			<p>$ {product.price}</p>
		</Link>
	)
}
export default Item;
