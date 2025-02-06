import { useContext } from 'react';
import { LevelContext } from "./someContextIdunno"

export default function someHeading({}: any){
    const number_something = useContext(LevelContext)

    if (!number_something) {
        return <div>Error: LevelContext is not available.</div>;
    }

    const { addTwoNumbers } = number_something;
    
    return <h1>{addTwoNumbers(1,2)}</h1>
    
}
