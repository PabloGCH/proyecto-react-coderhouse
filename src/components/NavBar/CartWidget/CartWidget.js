import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
//import { useContext, useEffect, useState } from 'react'; 


const CartWidget = ({quantity}) => {
	

	return (
		<>
			<span>{quantity}</span>
			<FontAwesomeIcon icon={faCartShopping}/>
		</>
	)
}
export default CartWidget;
