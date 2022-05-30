import React from 'react'
import {
    Create, TextInput, SimpleForm
} from 'react-admin';
import userCompanyId from "./api-redirects/userCompanyId"



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
                <TextInput source='name' />
                <TextInput source='email' type="email" />
                <TextInput source='password' type="password" />
                <TextInput disabled source='companyId' defaultValue={localStorage.getItem(`companyId`)} />
            </SimpleForm>
        </Create>
    /* ); */
    
);

export default UserCreate