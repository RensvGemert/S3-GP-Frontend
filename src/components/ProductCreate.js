import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';



const ProductCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/products/${data.id}`);
        notify(`Product created!`);
        refresh();
    };

    
    return (
        <Create {...props} title='Create new product' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='title' />
                <NumberInput source='price' step={0.01} />
                <NumberInput source='discount' min={0} max={100} />
                <TextInput source='image' type='url' />
                <RichTextInput source='description' />
            </SimpleForm>
        </Create>
    );
    
};

export default ProductCreate