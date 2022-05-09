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


    <Edit {...props} onSuccess={onSuccess}>
        <SimpleForm>
            <TextInput disabled source='id' defaultValue={1}  />
            <TextInput source='title' />
            <NumberInput source='price'  step={0.01}/>
            <NumberInput source='discount' min={0} max={100} />
            <TextInput source='image' type='url' />
            <RichTextInput source='description' />
            <ArrayInput source ='productFields' >
                    <SimpleFormIterator disableReordering>
                        <TextInput source='name' label='Productfield name' />
                        <TextInput source='value' label='Productfield value' />
                        <ReferenceInput source='fieldId' reference="fields" label="Productfield ID" >
                            <SelectInput optionText="name"  />
                        </ReferenceInput>
                    </SimpleFormIterator>
                </ArrayInput>
        </SimpleForm>
    </Edit>
};

export default ProductEdit