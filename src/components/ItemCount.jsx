import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'

export default function ItemCount () {
    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log ('se disparo el efecto')

        return () => {
            console.log ('se desmonto')
        }
    }, [count])


    const handleAdd = () => setCount (count + 1)
    const handleSub = () => {
        if (count > 0) setCount(prevCount => prevCount - 1);
    }

    return (
        <div className='d-flex flex-column align-items-center'
             style={{ width: 300}}>
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
        <Button variant='primary'>
            Add to cart
            </Button>
        </div>
    )
}