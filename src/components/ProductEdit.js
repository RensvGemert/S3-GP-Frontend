import React from 'react'
import {
    Edit, SimpleForm, TextInput, NumberInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source='id' defaultValue={1} />
            <TextInput source='title' />
            <NumberInput source='price'  step={0.01}/>
            <NumberInput source='discount' min={0} max={100} />
            <TextInput source='image' type='url' />
            <RichTextInput source='description' />
        </SimpleForm>
    </Edit>
);

export default ProductEdit