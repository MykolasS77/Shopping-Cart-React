import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BasketContext } from './basketContext';
import OffCanvasFunction from './offCanvas';


function NavBarComp() {
  const basket = useContext(BasketContext)

  const totalItems = basket.totalItems()
  

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Shopping Cart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto">
          </div>
          {window.location.pathname === "/" && (
          <span className="navbar-text me-5">          
            <OffCanvasFunction></OffCanvasFunction>
            
            <div className="position-relative">
              {totalItems != undefined && (
                <span className="position-absolute top-100 start-0 translate-middle badge rounded-pill bg-danger">
                         {totalItems}
                <span className="visually-hidden">total items</span>
                </span>            
              )}
            </div>
          </span>
          )
          }
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComp;