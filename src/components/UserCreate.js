import React, { useState, useEffect } from 'react'
import {
    Create, useNotify, useRefresh, useQuery, useRedirect, TextInput, SimpleForm, SelectInput
} from 'react-admin';



const UserCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/users/${data.id}`);
        notify(`User created!`);
        refresh();
    };

    const [company, setCustomers] = useState([]);
    const { data: companies } = useQuery({
        type: 'getList',
        resource: 'company',
        payload: {
        pagination: { page: 1, perPage: 600 },
        sort: { field: 'companyName', order: 'ASC' },
        filter: {},
        },
    });


    useEffect(() => {
        if (companies)
        setCustomers(companies.map((d) => ( { name: d.companyName, id: d.companyId } )));
    }, [companies]);

    
    return (
        <Create {...props} title='Create new user' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='password' />
                <SelectInput source='companyId' choices={company} />
            </SimpleForm>
        </Create>
    );
    
};

export default UserCreate