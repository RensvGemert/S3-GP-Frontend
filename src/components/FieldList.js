import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput, NumberField } from 'react-admin'

const UserFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='User Email' source='email' resettable alwaysOn />
</Filter>)

export const FieldList = props => (
    <List {...props}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            <EditButton basePath='/fields' />
            <DeleteButton basePath='/fields' />
        </Datagrid>
    </List>
);