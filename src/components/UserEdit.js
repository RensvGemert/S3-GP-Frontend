import React from 'react'
import {
    Edit, SimpleForm, TextInput, NumberInput
} from 'react-admin';

const UserEdit = (props) => (
    <Edit {...props}>
        <div>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='email' type="email" />
            <TextInput source='password' type="password" />
            <TextInput disabled source='companyId' />
        </SimpleForm>
        </div>   
    </Edit>
);

export default UserEdit