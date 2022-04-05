import React from 'react'
import {
    Edit, SimpleForm, TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' defaultValue={1} />
            <TextInput source='title' />
            <RichTextInput source='description' />
        </SimpleForm>
    </Edit>
);

export default ProductEdit