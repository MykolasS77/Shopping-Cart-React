import { useContext } from "react";
import NavBarComp from "./Navbar";
import { BasketContext } from "./basketContext";
import SingleItem from "./SingleItem";



export default function Basket(){
    const basket = useContext(BasketContext)
    
    const prod = basket.basketList.filter((value, index, array) => index == array.findIndex(item => item.id == value.id));

    return (
        <>
        <NavBarComp/>
        <div className="container">
            <div className="row">
        
        <h1>Basket Items:</h1>
        
            {prod.map(item => (
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