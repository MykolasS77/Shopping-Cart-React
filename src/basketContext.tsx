import { createContext, useState } from 'react';

type ContainerProps = {
    children: React.ReactNode
}

interface ContextType{
    exampleTsx: string,
    setExampleTsx: React.Dispatch<React.SetStateAction<string>>
    addToBasket(): string
}

const defaultState = {
    exampleTsx: "",
    setExampleTsx: () => "",
    addToBasket: () => "Hello World"
}

function addToBasket(){
    return "Hello world"
}

const BasketContext = createContext<ContextType >(defaultState)

const BasketContextProvider = (props: ContainerProps) => {

    const [exampleTsx, setExampleTsx] = useState<string>("")

    return(
        <BasketContext.Provider value={{exampleTsx, setExampleTsx, addToBasket}}>
            {props.children}
        </BasketContext.Provider>
    )

}

export {BasketContext, BasketContextProvider}