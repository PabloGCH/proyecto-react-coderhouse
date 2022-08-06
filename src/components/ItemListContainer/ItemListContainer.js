import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList.js";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const {id} = useParams()
	useEffect(() => {
		if(id) {
			getProductsByCategory(id).then( data => setProducts(data))
		} else {
			getProducts().then( data => setProducts(data))	
		}
	}, [id])

	return (
		<div className="ItemListContainer">
			<h1>Products</h1>
			<ItemList products={products}/>
		</div>
	)
}

export default ItemListContainer;
