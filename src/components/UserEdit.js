import React from 'react'
import {
    Edit, SimpleForm, TextInput, ReferenceInput, SelectInput
} from 'react-admin';
const companyId = localStorage.getItem('companyId');

function UserEdit(props) {
    if(companyId === '1') 
    {
        return (
            <Edit {...props} title='Edit user' /* onSuccess={onSuccess} */>
                <SimpleForm>
                    <TextInput source='name' />
                    <TextInput source='email' type="email" />
                    <TextInput source='password' type="password" />
                    <ReferenceInput source='companyId' reference="companies" label="Company">
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                </SimpleForm>
            </Edit>
        );
    }
    else
    {
        return (
            <Edit {...props} title='Edit user' /* onSuccess={onSuccess} */>
                <SimpleForm>
                    <TextInput source='name' />
                    <TextInput source='email' type="email" />
                    <TextInput source='password' type="password" />
                    <TextInput disabled source='companyId' defaultValue={localStorage.getItem(`companyId`)} />
                </SimpleForm>
            </Edit>
        );
    }
    
    
}

export default UserEdit