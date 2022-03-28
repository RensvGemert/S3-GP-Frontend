import React, { useState, useEffect } from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, SimpleForm
} from 'react-admin';



const UserCreate = (props) => (
    
    /* const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({ data }) => {
        useNotify(`New user created! `);
        redirect(`/users?filter=%7B"id"%3A${data.id}`);
        refresh();
    }; */

    
    /* return ( */
        <Create {...props} title='Create new user' /* onSuccess={onSuccess} */>
            <SimpleForm>
                <TextInput disabled source='id' defaultValue='1' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    /* ); */
    
);

export default UserCreate