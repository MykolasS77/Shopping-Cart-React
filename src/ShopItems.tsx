import ItemsList from "../items.json"
import SingleItem from "./SingleItem"



export default function ShopItems(){
    
    return (
        <div className="container ">
            <div className="row d-flex justify-content-md-start justify-content-center">
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