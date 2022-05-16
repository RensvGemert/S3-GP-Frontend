import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm, ArrayInput, SimpleFormIterator, SelectInput, ReferenceInput
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
        <>
        <Create {...props} title='Create new product' onSuccess={onSuccess}>
        {localStorage.getItem('role') === '2' ? (
            <SimpleForm>            
                <TextInput source='title' />         
                <NumberInput source='price' step={0.01} />
                <NumberInput source='discount' min={0} max={100} />
                <TextInput source='image' type='url' />
                <RichTextInput source='description' />

                <ArrayInput source ='productFields' >
                    <SimpleFormIterator disableReordering>
                        <ReferenceInput source='fieldId' reference="fields" label="Productfield ID">
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                        <TextInput source='value' label='Productfield value' />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
            ) :    
            <p>No Access</p>
        }
        </Create>

        

        </>
    );
    
};

export default ProductCreate