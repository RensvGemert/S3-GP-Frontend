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
//    var hashedpwd = (function () {
//     var egg = document.getElementById('password').value; 
//         bcrypt.hash(egg, 10, (err, hash) => {
//         if (err) {
//             return err;
//         }
//         console.log(hash);
//         return hash;
//         })
//     })();  

var response = ""

    function change(){
        var egg = document.getElementById('password').value; 
        bcrypt.hash(egg, 10, (err, hashedpwd) => {
            if (err) {
                return err;
                console.error(err);
            }
            console.log(hashedpwd);
            return hashedpwd;
            })
    }

   response = change;
   
    const transform = data => ({
        ...data,
        password: `${this.hashedpwd}`
    });
    return ( 
        <Create {...props} title='Create new user' transform={transform}>
            <SimpleForm >
                <TextInput disabled source='id' />
                <TextInput source='name' />
                <TextInput source='email' />
                <TextInput source='password' onChange={change}/>
            </SimpleForm >
        </Create >
     ); 
    }

export default UserCreate