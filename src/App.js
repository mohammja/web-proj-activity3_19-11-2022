import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)
  
  //Second challenge:
   function handleDecreaseClick(productId){
   let newProducts = products.map(product =>{
    if(product.id === productId){
        return{
            ...product,
            count: product.count -1
        };
    } else {
        return product;
    }
   });
   newProducts = newProducts.filter(prod => prod.count>0);

   setProducts(newProducts)
}
  //First challenge:
  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreaseClick(product.id);}}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
