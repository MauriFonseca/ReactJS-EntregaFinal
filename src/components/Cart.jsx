import ListGroup from 'react-bootstrap/ListGroup'
import { useCart } from '../context/useCart'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { serverTimestamp } from 'firebase/database'
import { createOrder } from '../firebase/db'

export default function Cart () {
    const { cart, getTotal, removeFromCart, clearCart } = useCart()

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const email = e.target[0].value
        const name = e.target[1].value
        const phone = e.target[2].value
    
        const order = {
            buyer: { name, email, phone },
            total: getTotal(),
            items: cart,
            date: serverTimestamp(),
        };
        createOrder(order)
            .then(() => {
                Swal.fire({
                    title: "¡Orden creada!",
                    text: `Gracias, ${name}. Tu compra se ha registrado exitosamente.`,
                    icon: "success",
                    confirmButtonText: "OK",
                    draggable: true,
                });
            })
            .catch((error) => {
                console.error("Error al crear la orden:", error)
                Swal.fire({
                    title: "Error",
                    text: "Ocurrió un problema al procesar tu orden. Por favor, intenta de nuevo.",
                    icon: "error",
                    confirmButtonText: "OK",
                })
            })
    }
    return (
        <div className='d-flex justify-content-between'>
            <ListGroup className='w-50 me-3'>
                {cart.map (prod => (
                    <ListGroup.Item key={`item-${prod.id}`}>
                    <div><strong>{prod.name}</strong> x {prod.qty}</div>
                    <img src={prod.image} alt={prod.name} style={{ width: "100px", height: "auto"}} />
                    <div>Precio unitario: ${prod.price.toFixed(2)}</div>
                    <div>Total: ${(prod.price * prod.qty).toFixed(2)}</div>
                <Button
                    variant="danger"
                    onClick={() => removeFromCart(prod.id)}
                    className="ms-3"
                    >
                    Eliminar Producto
                </Button>
                </ListGroup.Item>
                ))}
                <ListGroup.Item>
                    <h3>Total de la compra: ${getTotal().toFixed(2)}</h3>
                </ListGroup.Item>
                <ListGroup.Item className="text-center">
                    <Button className='btn' variant="warning" onClick={clearCart}>
                        Vaciar Carrito
                    </Button>
                </ListGroup.Item>
            </ListGroup>

            <Form className='w-50' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
            Esta informacion siempre va a ser confidencial :)
            </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Your Phone Number" required />
            </Form.Group>

            <Button variant="primary" type="submit">
            Submit
            </Button>
            </Form>
        </div>
    )
}