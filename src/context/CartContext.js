import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
	const [cart, setCart] = useState([]);

	const clear = () => {
		setCart([]);
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
			/* Tuve que remplazar este codigo porque no me actualizaba el CartWidget
			let newCart = cart;
			newCart[index].quantity += newProduct.quantity;
			setCart(newCart);
			*/
			setCart((currentArray) => {
				return [
					...currentArray.slice(0, index),
					{
					...currentArray[index], quantity: currentArray[index].quantity + newProduct.quantity
					},
					...currentArray.slice(index + 1)
				]
			})
		}
	}
	const removeItem = (itemId) => {
		let newCart = cart;
		let index = newCart.findIndex((el) => {
			return el.id == itemId;
		});
		if(index != -1 ) {
			newCart.splice(index, 1);
			setCart(newCart);
		}
	}
	return (
		<CartContext.Provider value={{cart, isInCart, addItem, getQuantity, removeItem}}>
			{children}
		</CartContext.Provider>
	)
}
export default CartContext;
