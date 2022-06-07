import React from 'react'
import { List, Datagrid, TextField, EditButton, Filter, SearchInput, NumberField } from 'react-admin'

const FieldFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Field name' source='name' resettable alwaysOn />
</Filter>)

export const FieldList = props => (
    <List {...props} filters={<FieldFilter />} pagination={false} sort={{field: 'name', order: 'ASC'}} >
        <Datagrid>
            {/* <NumberField source="id" /> */}
            <TextField source="name" />
            <EditButton basePath='/fields' />
        </Datagrid>
    </List>
);

export default FieldList