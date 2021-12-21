import React from "react";
import { createContext, CSSProperties } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs,InitialValues, ProductCardHandle } from "../interfaces/productInterfaces";

export interface Props {
  product: Product;
  //children?: ReactElement | ReactElement[];
  children: (args:ProductCardHandle) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?:(arg:onChangeArgs)=>void;
  value?:number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, maxCount, resetCounter } =
    useProduct({ product, onChange, value, initialValues });

  return (
    <Provider value={{ counter, increaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy: increaseBy,
          isMaxCountReached: isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product: product,
          reset: resetCounter,
        })}
      </div>
    </Provider>
  );
};
export default ProductCard;


