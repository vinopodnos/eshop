import { createContext, useContext } from "react";
import useLocalStorage from "./useLocalStorage";

const CartContext = createContext({});

export function useCart() {
	return useContext(CartContext);
}

export function CartProvider({ children }) {
	const [cart, setCart] = useLocalStorage("cart", []);
	console.log(cart);

	function increaseQuantity(id) {
		console.log(id);
		setCart((p) => {
			if (p.find((i) => i.id === id) === undefined) {
				return [...p, { id, quantity: 1 }];
			}
			return p.map((i) => {
				if (i.id === id) {
					return { ...i, quantity: i.quantity + 1 };
				}
				return i;
			});
		});
	}

	function decreaseQuantity(id) {
		setCart((p) => {
			if (p.find((i) => i.id === id)?.quantity === 1) {
				return p.filter((i) => i.id !== id);
			}
			return p.map((i) => {
				if (i.id === id) {
					return { ...i, quantity: i.quantity - 1 };
				}
				return i;
			});
		});
	}

	function remove(id) {
		setCart((p) => p.filter((i) => i.id !== id));
	}

	function getQuantity(id) {
		return cart.find((i) => i.id === id)?.quantity || 0;
	}

	const cartQuantity = cart.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				increaseQuantity,
				decreaseQuantity,
				remove,
				getQuantity,
				cartQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
