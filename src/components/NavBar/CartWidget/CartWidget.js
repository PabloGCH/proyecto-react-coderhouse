import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({quantity}) => {
	return (
		<>
			<span>{quantity}</span>
			<FontAwesomeIcon icon={faCartShopping}/>
		</>
	)
}
export default CartWidget;
