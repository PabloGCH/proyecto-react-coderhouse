import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList.js";
//import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory}  from "../../firestore.js";

const ItemListContainer = () => {
	const [products, setProducts] = useState([]);
	const {id} = useParams()


	useEffect(() => {
		if(id) {
			getProductsByCategory(id)
			.then(response => {
				let productsList = response.docs.map(doc => {
					const data = doc.data();
					return {
						id: doc.id,
						...data
					}
				});
				setProducts(productsList);
			})
		} else {
			getProducts()
			.then((response) => {
				let productsList = response.docs.map(doc => {
					const data = doc.data();
					return {
						id: doc.id,
						...data
					}
				});
				setProducts(productsList);
			});
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
