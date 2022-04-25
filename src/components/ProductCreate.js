import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm, ArrayInput, SimpleFormIterator, SelectInput
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { ArrayInputContext } from 'ra-ui-materialui/lib/input/ArrayInput/ArrayInputContext';



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
                <ArrayInput source ='productField' >
                    <SimpleFormIterator disableReordering>
                        <TextInput source='productFieldName' label='Product field name' />
                        <SelectInput source='productFieldType' label='Product field type' choices={[
                            { id: '1', name: 'String' },
                            { id: '2', name: 'Integer' },
                            { id: '3', name: 'Boolean' },
                        ]} />
                        <TextInput source='productFieldValue' label='Product field value' />
                    </SimpleFormIterator>
                </ArrayInput>
            </SimpleForm>
        </Create>
    );
    
};

export default ProductCreate