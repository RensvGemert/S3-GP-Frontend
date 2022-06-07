import React from 'react'
import { List, Datagrid, TextInput, TextField, NumberField, ReferenceField, EditButton, DeleteButton, ShowButton, Filter, SearchInput, RichTextField, ReferenceArrayField, SingleFieldList, ChipField, ImageField, ReferenceInput, SelectInput } from 'react-admin';

const companyId = localStorage.getItem('companyId');
const companyRole = localStorage.getItem('companyRole');

const ProductFilter = (props) => (<Filter {...props}>
  <TextInput label='Product title' source='title' resettable alwaysOn />
  <ReferenceInput label='Select category' source="categories" reference="categories" alwaysOn>
      <SelectInput optionText="name" />
  </ReferenceInput>
</Filter>)

function ProductList(props) {
  
  if(companyRole !== '2' || companyId === '1')
  {
    return (
      <List {...props} filters={<ProductFilter />} pagination={false} sort={{field: 'title', order: 'ASC'}} >
        <Datagrid>
          {/* <TextField source='id' /> */}
          <TextField source='title' />
          <NumberField source='price' />
          <NumberField source='discount' />
          <ImageField source='image' type='url' />
          <RichTextField multiline="true" source='description' />
          <ReferenceArrayField label="Categories" reference="categories" sortable={false} source="categories" >
            <SingleFieldList linkType=""  >
              <ChipField source="name" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField label="Company" source="companyId" reference="companies" link={false}>
            <TextField source="name" />
          </ReferenceField>
          <EditButton basePath={props.basePath} />
          <DeleteButton basePath={props.basePath} />
        </Datagrid>
      </List>
    );
  }
  else
  {
    return (
      <List {...props} filters={<ProductFilter />} pagination={false} sort={{field: 'title', order: 'ASC'}} >
        <Datagrid>
          {/* <TextField source='id' /> */}
          <TextField source='title' />
          <NumberField source='price' />
          <NumberField source='discount' />
          <ImageField source='image' type='url' />
          <RichTextField multiline="true" source='description' />
          <ReferenceArrayField label="Categories" reference="categories" sortable={false} source="categories" >
            <SingleFieldList linkType=""  >
              <ChipField source="name" />
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField label="Company" source="companyId" reference="companies" link={false}>
            <TextField source="name" />
          </ReferenceField>
          <ShowButton basePath={props.basePath} />
        </Datagrid>
      </List>
    );
  }
}

export default ProductList