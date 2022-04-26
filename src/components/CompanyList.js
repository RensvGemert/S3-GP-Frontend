import React from 'react'
import { List, Datagrid, TextField, RichTextField, EditButton, DeleteButton, Filter, SearchInput, NumberField } from 'react-admin'

const CompanyFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Company Name' source='companyName' resettable alwaysOn />
</Filter>)

function CompanyList(props) {
  return (
    <List {...props} filters={<CompanyFilter />}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <RichTextField source='description' />
            <NumberField source='role' />
            <TextField source='createdAt' />
            <EditButton basePath='/company' />
            <DeleteButton basePath='/company' />
        </Datagrid>
    </List>
  );
  
}

export default CompanyList