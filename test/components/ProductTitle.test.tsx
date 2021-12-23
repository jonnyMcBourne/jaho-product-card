import React from "react";
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { products } from '../data/products';

describe('productTitle',()=>{
    test('must show the component correctly with the custom title',()=>{
        const wrapper = renderer.create(<ProductTitle  title="custom title"/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});

describe('must show the title of the product name',()=>{
    test('must show the title of the product inside the productCard',()=>{
        const wrapper = renderer.create(
        <ProductCard product={products[0]} >
            {
            ()=>(
                <ProductTitle/>
            )
            }
        </ProductCard>
        )
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});