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

interface SingleItemProps{
  item: ShopItemType
  inBasket?: boolean
  quantity?: number
}

function SingleItem({ item, inBasket = false, quantity }: SingleItemProps) {
  const basket = useContext(BasketContext);

  const add = () => basket.updateArray(item.id)
  const remove = () => basket.removeItem(item.id)

  

  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={item.picture}/>
      <Card.Body>
        <div className="d-flex justify-content-between">
        <Card.Title>{item["itemName"]} </Card.Title>
        {item.stock > 5 && inBasket == false ? <p className="text-muted">+5 in stock</p> : inBasket? <Card.Title>{quantity} in cart </Card.Title>: <p className='text-danger'>{item.stock} left in stock</p>} 
        </div>
        <Card.Text className="d-flex justify-content-between align-items-center">{item.price}€</Card.Text>
        <div>
        <Button variant="primary" onClick={add}>{inBasket? "+" : "Buy"}</Button>
        {inBasket? <Button variant="primary" onClick={remove}>-</Button> : null}
        </div>
        
      </Card.Body>
    </Card>
  );
}

export default SingleItem;