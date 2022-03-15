import React, { Component } from 'react';

class Products extends Component {

constructor(props){
  super(props);
  this.state = {
    productItems: []
  }
}

componentDidMount() {
  fetch("http://localhost:8080/api/products")
  .then(res => res.json())
  .then(json => {
    this.setState({
      productItems: json
    })
  });
}
  
render() {

    return (
      <div className="Products">

      <table>

        <thead>   
          <tr>
          <th>Id:</th>
          <th>Title:</th>
          <th>Description:</th>
          </tr>  
        </thead>

        <tbody>
          {
            this.state.productItems.map(product => (
              <tr key={product.productId}>
                <td> {product.productId} </td>
                <td> {product.productTitle} </td>
                <td> {product.productDescription} </td>
                </tr>
            ))
          }
        </tbody>

      </table>
     </div>
    );
   }
  }

export default Products;
