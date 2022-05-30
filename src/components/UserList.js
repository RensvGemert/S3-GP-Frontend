import React from 'react'
import { List, Datagrid, TextField, EditButton, DeleteButton, Filter, SearchInput } from 'react-admin'

const UserFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='User Email' source='email' resettable alwaysOn />
</Filter>)

function UserList(props) {
  return (
    <List {...props} filters={<UserFilter />}>
        <Datagrid>
            <TextField source='id' sortable={false} />
            <TextField source='name' sortable={false} />
            <TextField source='email' sortable={false} />
            <EditButton basePath={props.basePath} />
            <DeleteButton basePath={props.basePath} />
        </Datagrid>
    </List>
  );
  
}

export default UserList