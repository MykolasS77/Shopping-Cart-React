import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleItem({ item }: { item: any }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.picture}/>
      <Card.Body>
        <Card.Title>{item["itemName"]}</Card.Title>
        <Card.Text className="d-flex justify-content-between align-items-center"><h3>{item.price}€</h3>
        <Button variant="primary" className="d-flex justify-content-end">Buy</Button></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleItem;