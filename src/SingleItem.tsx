import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { BasketContext } from "./basketContext";


interface ShopItemType{
  id: number,
  itemName: string,
  price: number,
  picture: string,
  stock: number

}

function SingleItem({ item }: { item: ShopItemType }) {
  const basket = useContext(BasketContext);

  const update = () => basket.updateArray(item.id)


  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={item.picture}/>
      <Card.Body>
        <div className="d-flex justify-content-between">
        <Card.Title>{item["itemName"]} </Card.Title>
        {item.stock > 5 ? <p className="text-muted">+5 in stock</p> : <p className='text-danger'>{item.stock} left in stock</p>} 
        </div>
        <Card.Text className="d-flex justify-content-between align-items-center"><>{item.price}€</>
        <Button variant="primary" className="d-flex justify-content-end" onClick={update}>Buy</Button></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleItem;