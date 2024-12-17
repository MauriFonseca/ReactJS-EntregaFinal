import { useState } from "react"
import { cartContext } from "./cartContext"

export default function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id)
        if (existingProduct) {
            setCart(cart.map((item) =>
                item.id === product.id
                    ? { ...item, qty: item.qty + product.qty }
                    : item
            ))
        } else {
            setCart([...cart, product])
        }
    }

    const getQuantity = () => {
        const qtyOnly = cart.map(prod => prod.qty)
        const total = qtyOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    const getTotal = () => {
        const pricesOnly = cart.map(prod => prod.qty*prod.price)
        const total = pricesOnly.reduce((acc, current) => acc + current, 0)
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal }}>
            {children}
        </cartContext.Provider>
    )
}