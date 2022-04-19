import React from 'react'
import {
    Edit, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';


const UserEdit = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/users/${data.id}`);
        notify(`User Edited!`);
        refresh();
    };

    
    return (
        <Edit {...props} title={`Edit ${props.id}`} onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' step={0.01} />
            </SimpleForm>
        </Edit>
    );
    
};

export default UserEdit