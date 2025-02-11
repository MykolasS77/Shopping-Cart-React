import { useContext } from "react";
import NavBarComp from "./Navbar";
import { BasketContext } from "./basketContext";
import { Button, Card } from "react-bootstrap";
import ItemsList from "../items.json"



export default function Basket(){
    const basket = useContext(BasketContext)
    console.log(basket.basketList, "from Basket")
    console.log()
    {ItemsList.find(obj => obj.id === 3)}

    return (
        <>
        <NavBarComp/>
        <div className="container">
            <div className="row">
        
        <h1>Basket Items:</h1>
        
            {basket.basketList.map(item => (
            
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={item.picture}/>
              <Card.Body>
                <div className="d-flex justify-content-between">
                <Card.Title>{item["itemName"]} </Card.Title>
                </div>
                <Card.Text className="d-flex justify-content-between align-items-center"><>{item.price}€</>
                {/* <Button variant="primary" className="d-flex justify-content-end" onClick={update}>Buy</Button> */}
                </Card.Text>
              </Card.Body>
            </Card>
            ))}
        
        </div>
        </div>
        </>
        
    )
    
}