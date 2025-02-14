import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BasketContext } from './basketContext';
import OffCanvasFunction from './offCanvas';


function NavBarComp() {
  const basket = useContext(BasketContext)

  const totalItems = () => {
    if(basket.basketList.length === 0){
      return 
    }
    else{
      let totalItems = 0
      basket.basketList.forEach(element => {
        totalItems += element.quantity
      });

      return(
        <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">total items</span>
        </span>
      )
    }
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <span className="navbar-text me-5">          
            <OffCanvasFunction></OffCanvasFunction>
            <div className="position-relative">
              {totalItems()}
            </div>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;