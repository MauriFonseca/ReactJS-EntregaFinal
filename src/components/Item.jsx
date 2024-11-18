import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export default function Item ({ item }) {
    return (
        <Col className='col-v1'>
        <Card>
            <Card.Img variant='top' src={item.image} /> 
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
            <Card.Text>
                {item.category}
            </Card.Text>
            <Card.Text>
                {item.description}
            </Card.Text> 
            <Button as={Link} to={`/item/${item.id}`}>
                Ver mas
            </Button>   
            </Card.Body>
        </Card>
        </Col>
    )
}