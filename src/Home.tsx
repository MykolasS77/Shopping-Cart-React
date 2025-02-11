import { useContext } from "react"
import { BasketContext } from "./basketContext"
import NavBarComp from "./Navbar"
import ShopItems from "./ShopItems"

export default function Home(){

    const basket = useContext(BasketContext)

    return(
        <>
        <NavBarComp/>
        <ShopItems/>
        </>
        

    )
}