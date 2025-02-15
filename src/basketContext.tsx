import React, { createContext, useEffect, useState } from 'react';
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
    addToBasket: (id: number) => void
    minusItem: (id: number) => void
    getTotalPrice: () => number
    totalItems: () => number | void 
    removeItem: (id: number) => void
}



const defaultState = {
    basketList: [],
    setbasketList: () => "",
    addToBasket: () => [],
    minusItem: () => [],
    getTotalPrice: () => 0,
    totalItems: () => 0,
    removeItem: () => []

}


const BasketContext = createContext<ContextType >(defaultState)

const BasketContextProvider = (props: ContainerProps) => {

        const data = JSON.parse(window.localStorage.getItem("items") || "[]")
        const [basketList, setbasketList] = useState<MyObject[]>(data);
  
        const getTotalPrice = () => {
          let totalAmount = 0
          basketList.forEach((item) => {
            totalAmount += item.price * item.quantity
          })
          return totalAmount
        }


        
        const addToBasket = (itemID: number) => {
          const itemObj = ItemsList.find(obj => obj.id === itemID)
          const findObj = basketList.find(obj => obj.id === itemObj?.id)
                      
          if (itemObj && findObj === undefined ){
            const newObj = {...itemObj, quantity: 1}
            setbasketList(prevList => [...prevList, newObj])
          }
          else{
            const newList = basketList.map((item) => {
              
              if(item.id === itemID){
                const newQuantity = item.quantity + 1
                return {...item, quantity: newQuantity}
              }
              return item
              
            })
            setbasketList(newList)
          }
              
        }

        const minusItem = (itemID: number) => {

        const newList = basketList.map((item) => {
            
            if(item.id === itemID){ 
            
              const newQuantity = item.quantity - 1
              return {...item, quantity: newQuantity}
            }
            return item
            
          })
         
          setbasketList(newList)

          basketList.forEach(item => {
            if(item.quantity === 1 && itemID === item.id){        
              const newList = basketList.filter(a => a.id !== itemID)
              setbasketList(newList)
              return
            }
          })
                       
        }

        const totalItems = () => {
          if(basketList.length === 0){
            return 
          }
          else{
            let totalItems = 0
            basketList.forEach(element => {
              totalItems += element.quantity
            });
      
            return totalItems
          }
        }

        const removeItem = (itemID: number) => {
          setbasketList(
            basketList.filter(a => a.id !== itemID)
          );
        }

        useEffect(() => {
          window.localStorage.setItem("items", JSON.stringify(basketList))
        }, [basketList])



    return(
        <BasketContext.Provider value={{basketList, setbasketList, addToBasket, minusItem, getTotalPrice, totalItems, removeItem}}>
            {props.children}
        </BasketContext.Provider>
    )

}

export {BasketContext, BasketContextProvider}