import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react'; 
import { CartContext } from "../../../context/CartContext.js";

const CartWidget = () => {
	const {getQuantity} = useContext(CartContext);
	let quantity = getQuantity();

	return (
		<>
			<span>{quantity}</span>
			<FontAwesomeIcon icon={faCartShopping}/>
		</>
	)
}
export default CartWidget;
