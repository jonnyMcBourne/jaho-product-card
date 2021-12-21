import { useState } from "react";
import { Product } from '../interfaces/productInterfaces'
interface IProductInCart extends Product {
    count: number;
  }
  interface IonProductChange {
    count: number;
    product: Product;
  }
export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: IProductInCart }>({});
    
    const onProductCountChange = ({ count, product }: IonProductChange) => {
        setShoppingCart((prevCart) => {
            if (count === 0) {
              const { [product.id]: toDelete, ...rest } = prevCart;
              return rest;
            }
            return { ...shoppingCart, [product.id]: { count, ...product } };
          });
    };
    return {onProductCountChange,shoppingCart}
}