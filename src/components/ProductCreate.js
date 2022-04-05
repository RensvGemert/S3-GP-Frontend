import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, SimpleForm
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
                <RichTextInput source='description' />
            </SimpleForm>
        </Create>
    );
    
};

export default ProductCreate