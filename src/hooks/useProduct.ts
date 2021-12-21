import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs,InitialValues } from '../interfaces/productInterfaces'

interface IuseProductArgs {
    product: Product;
    onChange?: (args: onChangeArgs) => void
    value?: number;
    initialValues?: InitialValues;
}
export const useProduct = ({ product, onChange, value = 0, initialValues }: IuseProductArgs) => {
    const initialCounterState = initialValues?.count || value;
    const [counter, setCounter] = useState(  initialCounterState);
    const isMounted = useRef(false);

    const increaseBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if(initialValues?.maxCount){
            newValue = Math.min(newValue,initialValues.maxCount );
        }
        setCounter(newValue)
        onChange && onChange({ product, count: newValue });
    }

    useEffect(() => {
     if(!isMounted.current ) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
    }, []);

    const resetCounter = ()=>{
        setCounter(initialCounterState);
    }
    return { counter, 
            increaseBy,
            isMaxCountReached: !! initialValues?.maxCount && initialValues.maxCount === counter,
            maxCount: initialValues?.maxCount,
            resetCounter
         };
};