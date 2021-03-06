import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const CategoryFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Category name' source='name' resettable alwaysOn />
</Filter>)

export const CategoryList = props => (
    <List {...props} filters={<CategoryFilter />} pagination={false} sort={{field: 'name', order: 'ASC'}} >
        <Datagrid>
            {/* <TextField source="id"  /> */}
            <TextField source="name"  />
            <EditButton basePath='/categories' />
            <DeleteButton basePath='/categories' />
        </Datagrid>
    </List>
);