import { useEffect, useState } from "react";
import {getProduct} from "../../asyncMock.js";
import ItemDetail from "./ItemDetail/ItemDetail.js";
import "./ItemDetailContainer.css";
import {useParams} from "react-router-dom";

const ItemDetailContainer = ({onAdd}) => {
	const [product, setProduct] = useState({});
	const id = useParams().id;
	useEffect(() => {
		getProduct(id)
		.then(data => {
			setProduct(data);
		});
	})
	return (
		<div className="ItemDetailContainer">
			<ItemDetail product={product} onAdd={onAdd}></ItemDetail>
		</div>
	);
}
export default ItemDetailContainer;
