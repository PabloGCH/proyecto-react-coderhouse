import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount.js";
import ItemList from "./ItemList/ItemList.js";
import { getProducts } from "../../asyncMock.js";
import { useEffect, useState } from "react";

const ItemListContainer = ({onAdd}) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		getProducts().then( data => setProducts(data))	
	}, [])

	return (
		<div className="ItemListContainer">
			<h1>Products</h1>
			<ItemCount stock="10" initial="1" onAdd={onAdd}/>
			<ItemList products={products}/>
		</div>
	)
}

export default ItemListContainer;
