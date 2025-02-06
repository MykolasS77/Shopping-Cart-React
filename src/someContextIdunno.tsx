import { createContext } from 'react';

interface LevelContextType {
    addTwoNumbers: (num1: number, num2: number) => number;
}

export const LevelContext = createContext<LevelContextType | null>(null);

export const LevelProvider = ({ children }: { children: React.ReactNode }) => {
    function addTwoNumbers(num1: number, num2: number): number {
        return num1 + num2;
    }

    return (
        <LevelContext.Provider value={{ addTwoNumbers }}>
            {children}
        </LevelContext.Provider>
    );
};