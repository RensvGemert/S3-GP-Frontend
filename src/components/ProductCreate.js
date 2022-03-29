import React, { useState, useEffect } from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, SimpleForm
} from 'react-admin';



const ProductCreate = (props) => (
    
    /* this.state = {
         notify: useNotify(),
         refresh: useRefresh(),
         redirect: useRedirect()
    }
    

    const onSuccess = ({ data }) => {
        this.state.notify(`New user created! `);
        redirect(`/products?filter=%7B"id"%3A${data.id}`);
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

export default ProductCreate