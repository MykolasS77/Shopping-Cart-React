import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BasketContext } from './basketContext';
import OffCanvasFunction from './offCanvas';
import { Link } from 'react-router-dom';


function NavBarComp({basketNav=false}: {basketNav?: boolean}) {
  const basket = useContext(BasketContext)

  const totalItems = basket.totalItems()

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" style={{ textDecoration: 'none' }} ><Navbar.Brand>Shopping Cart</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="me-auto">
          </div>
          {basketNav === false && (
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