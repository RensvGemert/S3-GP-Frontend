import React from 'react'
import {
    Create, TextInput, SimpleForm, ReferenceInput, SelectInput
} from 'react-admin';
const companyId = localStorage.getItem('companyId');

function UserCreate(props) {
    if(companyId === '1') 
    {
        return (
            <Create {...props} title='Create new user' /* onSuccess={onSuccess} */>
                <SimpleForm>
                    <TextInput source='name' />
                    <TextInput source='email' type="email" />
                    <TextInput source='password' type="password" />
                    <ReferenceInput source='companyId' reference="companies" label="Company">
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                </SimpleForm>
            </Create>
        );
    }
    else
    {
        return (
            <Create {...props} title='Create new user' /* onSuccess={onSuccess} */>
                <SimpleForm>
                    <TextInput source='name' />
                    <TextInput source='email' type="email" />
                    <TextInput source='password' type="password" />
                    <TextInput disabled source='companyId' defaultValue={localStorage.getItem(`companyId`)} />
                </SimpleForm>
            </Create>
        );
    }
    
    
}
export default UserCreate