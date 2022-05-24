import React from 'react'
import {
    Create, TextInput, SimpleForm
} from 'react-admin';
import bcrypt from 'bcryptjs'



// function postSave(password) {
//     var rounds = 10

//     bcrypt.hash(password, 10, (err, hash) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(hash)
//     })
//     return password;
// };

const UserCreate = (props) => {
    
    /* this.state = {
         notify: useNotify(),
         refresh: useRefresh(),
         redirect: useRedirect()
    }
    */
   var hash;
    function change(password){
        var egg = document.getElementById('password').value; 
        console.log(egg)
        bcrypt.hash(egg, 10, (err, hash) => {
            if (err) {
                console.error(err);
            }
            console.log(hash);
            console.log(document.getElementById('password').value);
            document.getElementById('password').value = hash;
            
            })
    }
    const transform = data => ({
        ...data,
        password: `${document.getElementById('password').value}`,
    });
    return ( 
        <Create {...props} title='Create new user'  ons>
            <SimpleForm  onSubmit={change({})}>
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput name='password' source='password'  />
            </SimpleForm >
        </Create >
     ); 
    }

export default UserCreate