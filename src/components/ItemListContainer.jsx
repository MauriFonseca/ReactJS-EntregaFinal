import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const allProducts = 'https://fakestoreapi.com/products'
    const categoryProducts = `https://fakestoreapi.com/products/category/${id}`

    useEffect(() => {
        fetch (id ? categoryProducts : allProducts)
            .then(res => res.json())
            .then((data) => setItems(data))
            }, [id])

    return (
    <ItemList items={items} />
    )
}