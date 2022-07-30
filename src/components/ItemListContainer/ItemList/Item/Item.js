import "./Item.css";

const Item = ({product}) => {
	return (
		<div className="Item">
			<img src={product.imgUrl}/>
			<h5>{product.title}</h5>
			<p>$ {product.price}</p>
		</div>
	)
}
export default Item;
