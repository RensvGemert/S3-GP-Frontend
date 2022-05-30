import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const CategoryFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Category name' source='name' resettable alwaysOn />
</Filter>)

export const CategoryList = props => (
    <List {...props} filters={<CategoryFilter />}>
        <Datagrid>
            <TextField source="id" sortable={false} />
            <TextField source="name" sortable={false} />
            <EditButton basePath='/categories' />
            <DeleteButton basePath='/categories' />
        </Datagrid>
    </List>
);