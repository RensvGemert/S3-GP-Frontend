import React from 'react'
import {
    Edit, SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator, SelectInput
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
    </Edit>
);

export default ProductEdit