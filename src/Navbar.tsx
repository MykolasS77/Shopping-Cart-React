import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { BasketContext } from './basketContext';


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
            <Link to="/basket">
            
            <div className="position-relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
              {totalItems()}
            </div>
            </Link>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;