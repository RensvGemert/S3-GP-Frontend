import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm, ArrayInput, SimpleFormIterator, SelectInput, ReferenceInput, ReferenceArrayInput, SelectArrayInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import userCompanyId from './api-redirects/userCompanyId';

const ProductCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/company/${data.companyId}/products`);
        notify(`Product created!`);
        refresh();
    };
    
    return (
        <>
        <Create {...props} title='Create new product' onSuccess={onSuccess}>
        {localStorage.getItem('userRole') === '1' ? (
            <SimpleForm>            
                <TextInput source='title' />         
                <NumberInput source='price' step={0.01} />
                <NumberInput source='discount' min={0} max={100} />
                <TextInput source='image' type='url' />
                <RichTextInput source='description' />
                <ReferenceArrayInput source="categories" reference="categories">
                    <SelectArrayInput optionText="name" />
                </ReferenceArrayInput>
                <ArrayInput source ='productFields' >
                    <SimpleFormIterator disableReordering>
                        <ReferenceInput source='fieldId' reference="fields" label="Productfield ID">
                            <SelectInput optionText="name" />
                        </ReferenceInput>
                        <TextInput source='value' label='Productfield value' />
                    </SimpleFormIterator>
                </ArrayInput>
                <TextInput type='hidden' label='' source='companyId' defaultValue={userCompanyId()}/> 
            </SimpleForm>
            ) :    
            <p>No Access</p>
        }
        </Create>
        </>
    ); 
};

export default ProductCreate