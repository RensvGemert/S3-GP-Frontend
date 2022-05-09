import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput, NumberField } from 'react-admin'

const FieldFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Field name' source='name' resettable alwaysOn />
</Filter>)

export const FieldList = props => (
    <List {...props} filters={<FieldFilter />}>
        <Datagrid>
            <NumberField source="id" />
            <TextField source="name" />
            {/* <DeleteButton basePath='/fields' /> */}
        </Datagrid>
    </List>
);