import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../firebase/db'
import ItemDetail from './ItemDetail'


export default function ItemDetailContainer () {
    const [detail, setDetail] = useState()
    const { id } = useParams()

    useEffect (() => {
        getDetail(id, setDetail)
    }, [id])
    return (
        <ItemDetail detail={detail} />
    )
}