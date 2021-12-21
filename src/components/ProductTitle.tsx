import React from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import '../styles/custom-styles.css';

export interface Props{
  title?:string;
  className?: string;
}

export const ProductTitle = ({ title,className }:Props) => {
    const { product } = useContext(ProductContext);
    let titleToShow: string;
    if (title) {
      titleToShow = title;
    } else if (product.name) {
      titleToShow = product.name;
    } else {
      titleToShow = "Insert a Title";
    }
  
    return (
      <span className={`${styles.productDescription} ${className}`}>
        {titleToShow}
      </span>
    );
  };