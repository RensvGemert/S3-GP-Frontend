import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';



const UserCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/users/${data.id}`);
        notify(`User created!`);
        refresh();
    };

    
    return (
        <Create {...props} title='Create new user' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    );
    
};

export default UserCreate