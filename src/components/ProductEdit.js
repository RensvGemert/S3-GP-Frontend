import React from 'react'
import {
    Edit, SimpleForm, TextInput, NumberInput, ArrayInput, SimpleFormIterator, SelectInput, ReferenceInput
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
            <ArrayInput source ='productFields' >
                    <SimpleFormIterator disableReordering>
                        <ReferenceInput source='fieldId' reference="fields" label="Productfield ID" >
                            <SelectInput optionText="name"  />
                        </ReferenceInput>
                        <TextInput source='value' label='Productfield value' />
                    </SimpleFormIterator>
                </ArrayInput>
        </SimpleForm>
    </Edit>
);

export default ProductEdit