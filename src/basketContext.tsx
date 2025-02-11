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

   
        // Initialize state with an empty array
        const [basketList, setbasketList] = useState<MyObject[]>([]);
      
        // Function to update the array
        const updateArray = (itemID: number) => {
            // console.log("update array initiated")
            console.log(itemID, "from context")
            const itemObj = ItemsList.find(obj => obj.id === itemID)
            
          if (itemObj){
            setbasketList(prevList => [...prevList, itemObj]);
          }
          else{
            console.log("object not found")
          }
          
          
          
          
        }


    return(
        <BasketContext.Provider value={{basketList, setbasketList, updateArray}}>
            {props.children}
        </BasketContext.Provider>
    )

}

export {BasketContext, BasketContextProvider}