import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Filter, SearchInput, RichTextField  } from 'react-admin';

const ProductFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Product Name' source='title' resettable alwaysOn />
</Filter>)

function ProductList(props) {
  return (
    <List {...props} filters={<ProductFilter />}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <RichTextField multiline="true" source='description'/>
            <EditButton basePath='/products' />
            <DeleteButton basePath='/products' />
        </Datagrid>
    </List>
  );
  
}

export default ProductList