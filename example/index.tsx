import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard,ProductButtons,ProductImage,ProductTitle } from '../.';
const product =     { id: 1, name: "Coffe mug", img: "./coffee-mug.png"};
const App = () => {
  return (
    <div>
      <ProductCard product={product}>
        {({}) => (
          <>
            <ProductImage  />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
