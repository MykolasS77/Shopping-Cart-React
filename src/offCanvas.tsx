import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SingleItem from "./SingleItem";
import { BasketContext } from "./basketContext";
import { Link } from 'react-router-dom';


export default function OffCanvasFunction() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const basket = useContext(BasketContext)
    
  const totalAmount = basket.getTotalPrice()

  return (
    <>
      <Button variant="" onClick={handleShow} className="me-2 btn-sm">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
      </svg>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        
        <Offcanvas.Header closeButton >
          <Offcanvas.Title>Your Items:</Offcanvas.Title>
        </Offcanvas.Header>
        
        <Offcanvas.Body>
        {basket.basketList.map(item => (
            <SingleItem 
            key={item.id} 
            item={item}
            inBasket={true}
            quantity={item.quantity}
            />
            ))}
         {basket.basketList.length > 0 ? <h2>Total price: {totalAmount.toFixed(2)}€</h2>: null}
        </Offcanvas.Body>
        {basket.basketList.length > 0 ? <Link to="/basket" className="d-flex justify-content-center"><Button>Proceed to Checkout</Button></Link> : null}
        
      </Offcanvas>
    </>
  );
}







