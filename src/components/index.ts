import  { ProductCard as ProductCardHOC } from '../components/ProductCard';
import { ProductCardHOCProps } from '../interfaces/productInterfaces';
import { ProductButtons } from './ProductButtons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductImage } from '../components/ProductImage';
export { ProductTitle } from '../components/ProductTitle';
export { ProductButtons } from '../components/ProductButtons';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductButtons
});

