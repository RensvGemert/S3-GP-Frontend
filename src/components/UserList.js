import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const UserFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='User Email' source='email' resettable alwaysOn />
</Filter>)

function UserList(props) {
  return (
    <List {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='email' />
            <TextField source='role' />
            <EditButton basePath='/users' />
            <DeleteButton basePath='/users' />
        </Datagrid>
    </List>
  );
  
}

export default UserList