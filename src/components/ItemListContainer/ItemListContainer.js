import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount.js";

const ItemListContainer = ({onAdd}) => {
	return (
		<div className="ItemListContainer">
			<h1>Products</h1>
			<ItemCount stock="10" initial="1" onAdd={onAdd}/>
		</div>
	)
}

export default ItemListContainer;
