import { useContext } from "react";
import NavBarComp from "./Navbar";
import { BasketContext } from "./basketContext";
import SingleItem from "./SingleItem";



export default function Basket(){
    const basket = useContext(BasketContext)
    
    

    return (
        <>
        <NavBarComp/>
        <div className="container">
            <div className="row">
        
        <h1>Basket Items:</h1>
        
            {basket.basketList.map(item => (
            <SingleItem 
            key={item.id} 
            item={item}
            inBasket={true}
            quantity={item.quantity}
            />
            ))}      
        </div>
        </div>
        </>
        
    )
    
}