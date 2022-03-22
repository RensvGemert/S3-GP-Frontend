import React, { Component } from 'react';
import {Table} from 'react-bootstrap';

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
      <h2 className='product-header'>Products</h2>
        <Table striped bordered hover>
          <thead>
            <tr>  
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
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
        </Table>
        </div>
    );
   }
  }

export default Products;
