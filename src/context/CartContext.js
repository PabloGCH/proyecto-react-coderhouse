import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
	const [cart, setCart] = useState([]);
	const [stateChange, setStateChange] = useState(false);
	useEffect(()=>{
		setStateChange(false);
	},[stateChange])

	const clear = () => {
		setCart([]);
	}
	const getProducts = () => {
		return cart;
	}
	const getQuantity = () => {
		let acc = 0;
		cart.forEach((el) => {
			acc += el.quantity;
		})
		return acc;
	}
	const isInCart = (itemId) => {
		let index = cart.findIndex((el) => {
			return el.id == itemId;
		})
		return index != -1
	}
	const addItem = (newProduct) => {
		let index = cart.findIndex((el) => {
			return el.id == newProduct.id;
		})
		if(index == -1) {
			setCart([...cart, newProduct]);
		} else {
			let newCart = cart;
			newCart[index].quantity += newProduct.quantity;
			setCart(newCart);
		}
		setStateChange(true);
	}
	const removeItem = (itemId) => {
		let newCart = cart;
		let index = newCart.findIndex((el) => {
			return el.id == itemId;
		});
		if(index != -1 ) {
			if(newCart[index].quantity > 1) {
				newCart[index].quantity -= 1;
				setCart(newCart);

			} else {
				newCart.splice(index, 1);
				setCart(newCart);
			}
		}
		setStateChange(true);
	}
	const getTotalPrice = () => {
		let acc = 0;
		cart.forEach(prod => acc += parseInt(prod.price) * parseInt(prod.quantity))
		return acc;
	}
	return (
		<CartContext.Provider value={{getTotalPrice, clear, getProducts, isInCart, addItem, getQuantity, removeItem}}>
			{children}
		</CartContext.Provider>
	)
}
export default CartContext;
