import ItemsList from "../items.json"
import SingleItem from "./SingleItem"



export default function ShopItems(){
    
    return (
        <div className="container">
            <div className="row">
            {ItemsList.map(item => 
            <SingleItem 
            key={item.id} 
            item={item}
            inBasket={false}
            />
            )}
            </div>
        </div>
    )
}