import React from 'react'
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, Filter, SearchInput, RichTextField  } from 'react-admin';

const ProductFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Product Name' source='title' resettable alwaysOn />
</Filter>)

function ProductList(props) {
  return (
    <List {...props} filters={<ProductFilter />}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <NumberField source='price' />
            <NumberField source='discount' />
            <TextField source='image' type='url' />
            <RichTextField multiline="true" source='description'/>
            <EditButton basePath={props.basePath} />
            <DeleteButton basePath={props.basePath} />
        </Datagrid>
    </List>
  );
}

export default ProductList