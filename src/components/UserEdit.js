import React from 'react'
import {
    Edit, SimpleForm, TextInput,
} from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <div>
        <SimpleForm >
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='email' />
        </SimpleForm>
        </div>   
    </Edit>
);

export default UserEdit