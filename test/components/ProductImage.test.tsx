import React from "react";
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { products } from '../data/products';

describe('productImage',()=>{
    test('must show the component without an image',()=>{
        const wrapper = renderer.create(<ProductImage img="https://th.bing.com/th/id/OIP.UPn4LXlCa5zuvmtt_rhlUgHaHa?pid=ImgDet&rs=1"/>)
        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});

describe('productImage', () => {
  test('must show image of the product inside the productCard', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
        {({}) => (
          <>
            <ProductImage />
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});