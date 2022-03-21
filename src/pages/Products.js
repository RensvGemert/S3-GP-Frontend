import React, { Component } from 'react';
import '../css-table/css/style.css';
import '../css-table/css/bootstrap.min.css';
import '../css-table/css/bootstrap.min.css.map';
import '../css-table/fonts/icomoon/style.css';


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

<div className="content">
    
    <div className="container">
      <h2 className="mb-5">Products</h2>
      

      <div className="table-responsive custom-table-responsive">

        <table className="table custom-table">
          <thead>
            <tr>  

              <th scope="col">
                <label className="control control--checkbox">
                  <input type="checkbox"  className="js-check-all"/>
                  <div className="control__indicator"></div>
                </label>
              </th>
              
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>

            </tr>
          </thead>

          <tbody>
          {
            this.state.productItems.map(product => (
              <tr key={product.productId}>
                 <th scope="row">
                  <label className="control control--checkbox">
                  <input type="checkbox"/>
                  <div className="control__indicator"></div>
                  </label>
              </th>
                <td> {product.productId} </td>


                <td> {product.productTitle} </td>
                <td> {product.productDescription} </td>
                </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    </div>
  </div>
    

    <script src="../pages/css-table/js/jquery-3.3.1.min.js"></script>
    <script src="../pages/css-table/js/popper.min.js"></script>
    <script src="../pages/css-table/js/bootstrap.min.js"></script>
    <script src="../pages/css-table/js/main.js"></script>

    </div>
    );
   }
  }

export default Products;
