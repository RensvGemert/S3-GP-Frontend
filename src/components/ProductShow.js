import React from 'react'
import {
    SimpleShowLayout, TextField, RichTextField, NumberField, ReferenceField, ArrayField, Show, ImageField, ChipField, Datagrid, ReferenceArrayField, SingleFieldList
} from 'react-admin';


const ProductShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <RichTextField source="description" />
            <NumberField source="price" />
            <NumberField source="discount" />
            <ImageField source="image" />
            <ArrayField source="productFields">
                <Datagrid>
                    <TextField source="name" />
                    <TextField source="value" />
                </Datagrid>
            </ArrayField>
            <ReferenceArrayField source="categories" reference="categories" link={false}>
                <SingleFieldList linkType="">
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ReferenceField source="companyId" reference="companies" link={false}>
                <TextField source="name" />
            </ReferenceField>
        </SimpleShowLayout>
    </Show>
);

export default ProductShow