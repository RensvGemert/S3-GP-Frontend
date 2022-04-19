import React from 'react'
import {
    Edit, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const ProductEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/products/${data.id}`);
        notify(`Product Edited!`);
        refresh();
    };

    
    return (
        <Edit {...props} title={`Edit ${props.id}`} onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='title' />
                <NumberInput source='price' step={0.01} />
                <NumberInput source='discount' min={0} max={100} />
                <TextInput source='image' type='url' />
                <RichTextInput source='description' />
            </SimpleForm>
        </Edit>
    );
    
};

export default ProductEdit