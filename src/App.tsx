import NavBarComp from "./Navbar"
import ShopItems from "./ShopItems"
import {BasketContextProvider} from "./basketContext"


function App() {

  return (
    <>
    <BasketContextProvider>
    <NavBarComp></NavBarComp>
    <ShopItems></ShopItems>
    </BasketContextProvider>
    </>
  )
}

export default App

