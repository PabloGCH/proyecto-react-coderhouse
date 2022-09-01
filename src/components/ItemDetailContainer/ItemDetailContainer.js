import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import {useParams} from "react-router-dom";
import {getProduct} from "../../firestore.js";

const ItemDetailContainer = () => {
	const [product, setProduct] = useState({});
	const id = useParams().id;
	useEffect(() => {
		getProduct(id)
		.then(response => {
			let data = response.data();
			let product = {
				id: response.id,
				...data
			}
			setProduct(product);
		});
	}, [])
	return (
		<div className="ItemDetailContainer">
			<ItemDetail product={product}></ItemDetail>
		</div>
	);
}
export default ItemDetailContainer;
