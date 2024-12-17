import Button from 'react-bootstrap/Button'
import { useState, useContext } from 'react'
import { cartContext } from '../context/cartContext'

export default function ItemCount ({ detail }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(cartContext)

    const handleAdd = () => setCount (count + 1)
    const handleSub = () => {
        if (count > 0) setCount(prevCount => prevCount - 1);
    }
    const handleAddToCart = () => { 
        addToCart({ ...detail, qty: count})
        Swal.fire({ 
            title: "¡Producto agregado!",
            text: `Has agregado ${count} unidades al carrito.`,
            icon: "success",
            confirmButtonText: "OK",
            draggable: true
        })
    }

    return (
        <div className='style_ItemCount'>
        <p className='text-center border' style={{ 
            width: '100%', 
            padding: '10px', 
            fontSize: '1.5rem' 
            }}
        >
            {count}
            </p>
        <div className='d-flex justify-content-between w-100 my-2'>
        <Button
            variant='danger'
            className='w-50 me-2'
            onClick={handleSub}
        >
            -
        </Button>
        <Button
        variant='success'
        className='w-50'
        onClick={handleAdd}
        >
            +
        </Button>
        </div>
          <Button
                variant='primary'
                className='mt-2'
                onClick={handleAddToCart}
               
            >
                Añadir al carrito
            </Button>
        </div>
    );
}
