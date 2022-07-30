import "./ItemList.css";
import Item from "./Item/Item.js"

const ItemList = ({products}) => {
	const productsComp = products.map(prod => <Item key={prod.id} product={prod}/>)

	return (
		<div className="ItemList">
			{productsComp}
		</div>
	)
}
export default ItemList;
