import React from 'react'
import {
    Edit, SimpleForm, TextInput,
} from 'react-admin';

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='title' />
            <TextInput source='description' />
        </SimpleForm>
    </Edit>
);

export default ProductEdit