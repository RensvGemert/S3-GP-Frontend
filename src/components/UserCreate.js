import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, SimpleForm
} from 'react-admin';



const UserCreate = (props) => (
    
    /* this.state = {
         notify: useNotify(),
         refresh: useRefresh(),
         redirect: useRedirect()
    }
    

    const onSuccess = ({ data }) => {
        this.state.notify(`New user created! `);
        redirect(`/users?filter=%7B"id"%3A${data.id}`);
        refresh();
    }; */

    
    /* return ( */
        <Create {...props} title='Create new user' /* onSuccess={onSuccess} */>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
            </SimpleForm>
        </Create>
    /* ); */
    
);

export default UserCreate