import React from 'react';
import { useContext } from 'react'
import NoImage from '../assets/no-image.jpg';
import {ProductContext} from './ProductCard'
import styles from '../styles/styles.module.css';

export interface Props{
  img?:string;
  className?:string;
}


export const ProductImage = ({ img = "", className }:Props) => {    
    const { product } = useContext(ProductContext);
    let imgToShow: string;
  
    if (img) {
      imgToShow = img;
    } else if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = NoImage;
    }
    return (
      <img
        className={`${styles.productImg} ${className}`}
        src={imgToShow}
        alt={product.name}
      />
    );
  };