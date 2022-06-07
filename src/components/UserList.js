import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const UserFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Search' source='name' resettable alwaysOn />
</Filter>)

function UserList(props) {
  return (
    <List {...props} pagination={false} sort={{field: 'name', order: 'ASC'}} filters={<UserFilter />}>
        <Datagrid>
            {/* <TextField source='id' sortable={false} /> */}
            <TextField source='name' />
            <TextField source='email' />
            <EditButton basePath={props.basePath} />
            <DeleteButton basePath={props.basePath} />
        </Datagrid>
    </List>
  );
  
}

export default UserList