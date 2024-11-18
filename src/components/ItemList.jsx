import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Item from './Item'

export default function ItemList ({items}) {
    return (
        <Container>
        <Row xs={1} sm={2} className='g-4'>
        {items.map (item => (
          <Item item={item} key={item.id} />
        ))}
        </Row>
        </Container> 
    )
}