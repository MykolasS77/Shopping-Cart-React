import { useContext } from "react";
import NavBarComp from "./Navbar";
import { BasketContext } from "./basketContext";
import SingleItem from "./SingleItem";



export default function Basket(){
    const basket = useContext(BasketContext)
    
    const totalAmount = basket.getTotalPrice()
    

    return (
        <>
        <NavBarComp/>
        <div className="container">
            <div className="row">
        
            {basket.basketList.length === 0? <h1>No items.</h1>: <h1>Your Items:</h1>}
        
            {basket.basketList.map(item => (
            <SingleItem 
            key={item.id} 
            item={item}
            inBasket={true}
            quantity={item.quantity}
            />
            ))}      
            </div>
            {basket.basketList.length === 0? null : <h1 className="d-flex align-items-end-item">Total price for your order: {totalAmount.toFixed(2)}€</h1>}
        </div>
        </>
        
    )
    
}