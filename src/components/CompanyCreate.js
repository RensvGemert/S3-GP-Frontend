import React from 'react'
import {
    Create, useNotify, useRefresh, useRedirect, TextInput, NumberInput, SimpleForm
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';



const CompanyCreate = props => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = ({data}) => {
        redirect(`/company/${data.id}`);
        notify(`Company registered!`);
        refresh();
    };

    
    return (
        <Create {...props} title='List your company' onSuccess={onSuccess}>
            <SimpleForm>
                <TextInput source='companyName' />
                <RichTextInput source='companyDescription' />
            </SimpleForm>
        </Create>
    );
    
};

export default CompanyCreate