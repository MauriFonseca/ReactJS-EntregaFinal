import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { ClockLoader } from "react-spinners"
import { getProducts, getFilterProducts } from '../firebase/db'

export default function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        id ? getFilterProducts(id, setItems) : getProducts(setItems)
            }, [id])

        if (items.length === 0) {
            return (
                <div className="clock_style">
                <ClockLoader />
                </div>
            )
         }
    return (
    <ItemList items={items} />
    )
}