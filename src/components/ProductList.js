import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin'

export const ProductList = (props) => {
  return <List {...props}>
      <Datagrid>
          <TextField source='productId' />
          <TextField source='productTitle' />
          <TextField source='productDescription' />
          <EditButton basePath='/products' />
          <DeleteButton basePath='/products' />
      </Datagrid>
  </List>
}

export default ProductList