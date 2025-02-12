import React, { createContext, useState } from 'react';
import ItemsList from "../items.json"

type ContainerProps = {
    children: React.ReactNode
}

interface MyObject {
    id: number,
    itemName: string,
    price: number,
    picture: string,
    quantity: number,
    stock: number
    
  }

interface ContextType{
    basketList: any[],
    setbasketList: React.Dispatch<React.SetStateAction<MyObject[]>>
    updateArray: (id: number) => void
}



const defaultState = {
    basketList: [],
    setbasketList: () => "",
    updateArray: () => ["Hello"]
}


const BasketContext = createContext<ContextType >(defaultState)

const BasketContextProvider = (props: ContainerProps) => {

  
        const [basketList, setbasketList] = useState<MyObject[]>([]);
       
      
        const updateArray = (itemID: number) => {
          const itemObj = ItemsList.find(obj => obj.id === itemID)
        
                    
          if (itemObj){
            basketList.forEach((item) => {
              console.log(item)
              if(item.id === itemID){
                item.quantity += 1
              }
            })
     
            const newObj = {...itemObj, quantity: 1}
            setbasketList(prevList => [...prevList, newObj])
              
            
          }
          
                
          
        }


    return(
        <BasketContext.Provider value={{basketList, setbasketList, updateArray}}>
            {props.children}
        </BasketContext.Provider>
    )

}

export {BasketContext, BasketContextProvider}