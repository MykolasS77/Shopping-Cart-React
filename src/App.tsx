import Basket from "./Basket"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import { BasketContextProvider } from "./basketContext"



function App() {

  return (
    <>
    <BasketContextProvider>
    <Routes>
      <Route path="/Shopping-Cart-React/" element={<Home/>}/>
      <Route path="/Shopping-Cart-React/basket" element={<Basket/>}/>
    </Routes>
    </BasketContextProvider>
    </>
  )
}

export default App



