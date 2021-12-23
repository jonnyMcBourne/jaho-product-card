import React from "react";
import renderer from 'react-test-renderer';
import { ProductCard,ProductButtons } from '../../src/components';
import { products } from '../data/products';

describe('ProductCard', () => {
  test('must show the component correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
        {({}) => (
          <>
            <ProductButtons />
          </>
        )}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('must increase in 1 the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={products[1]}>
        {({count, increaseBy}) =>{
            return (
                <>
                  <h1> { count } </h1>
                  <button onClick={()=>{increaseBy(1)} }>+1</button>
                </>
              )
        } }
      </ProductCard> 
    );
    
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    renderer.act(()=>{
        (tree as any).children[1].props.onClick();
    })
    tree = wrapper.toJSON();
    
    expect( (tree as any).children[0].children[1] ).toBe("1");
    });  
});