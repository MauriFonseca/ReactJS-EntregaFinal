import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Item ({ item }) {
    return (
        <Col className='cart_style col-v1'>
        <Card>
            <Card.Img className='product-card__image' variant='top' src={item.image} /> 
            <Card.Body>
                <Card.Title className='product-card__title'>{item.name}</Card.Title>
            <Card.Text>
                {item.category}
            </Card.Text>
            <Card.Text>
                {`Precio $ ${item.price}`}
            </Card.Text>
            <Card.Text className='product-card__description'>
                {item.description}
            </Card.Text> 
            <div className="product-card__footer">
                <Button className='product-card__button' as={Link} to={`/item/${item.id}`}>
                  Ver mas
                </Button>
            </div>   
            </Card.Body>
        </Card>
        </Col>
    )
}