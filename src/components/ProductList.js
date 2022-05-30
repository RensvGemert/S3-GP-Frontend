import React from 'react'
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton, DeleteButton, ShowButton, Filter, SearchInput, RichTextField, ReferenceArrayField, SingleFieldList, ChipField, ImageField } from 'react-admin';

const companyId = localStorage.getItem('companyId');
const companyRole = localStorage.getItem('companyRole');

const ProductFilter = (props) => (<Filter {...props}>
  <SearchInput placeholder='Product Name' source='title' resettable alwaysOn />
</Filter>)

function ProductList(props) {
  
  if(companyRole !== '2' || companyId === '1')
  {
    return (
      <List {...props} filters={<ProductFilter />}>
        <Datagrid>
          <TextField source='id' sortable={false}/>
          <TextField source='title' sortable={false}/>
          <NumberField source='price' sortable={false}/>
          <NumberField source='discount' sortable={false}/>
          <ImageField source='image' type='url' sortable={false}/>
          <RichTextField multiline="true" source='description'sortable={false} />
          <ReferenceArrayField label="Categories" reference="categories" source="categories" sortable={false} >
            <SingleFieldList linkType=""  >
              <ChipField source="name" sortable={false}/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField label="Company" source="companyId" reference="companies" sortable={false} link={false}>
            <TextField source="name" sortable={false}/>
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
      <List {...props} filters={<ProductFilter />}>
        <Datagrid>
          <TextField source='id' sortable={false}/>
          <TextField source='title' sortable={false}/>
          <NumberField source='price' sortable={false}/>
          <NumberField source='discount' sortable={false}/>
          <ImageField source='image' type='url' sortable={false}/>
          <RichTextField multiline="true" source='description'sortable={false} />
          <ReferenceArrayField label="Categories" reference="categories" source="categories" sortable={false} >
            <SingleFieldList linkType=""  >
              <ChipField source="name" sortable={false}/>
            </SingleFieldList>
          </ReferenceArrayField>
          <ReferenceField label="Company" source="companyId" reference="companies" sortable={false} link={false}>
            <TextField source="name" sortable={false}/>
          </ReferenceField>
          <ShowButton basePath={props.basePath} />
        </Datagrid>
      </List>
    );
  }
}

export default ProductList