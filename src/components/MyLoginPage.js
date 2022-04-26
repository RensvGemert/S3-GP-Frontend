import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNotify, useRefresh, useRedirect } from 'react-admin';

const MyLoginPage = () => {

    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        redirect(`/dashboard`);
        notify(`Login Success!`);
        refresh();
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');

    const LoginRequest = () => {
        axios.post('http://localhost:8080/api/users/login', {
            email,
            password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          }).then(json => {
              setId(json)
          });
        }

    return (
        <div className="form" onSubmit={onSuccess}>
            <form>
                <div className="input-container">
                    <label>Email </label>
                    <input
                        type="text"
                        name="email"
                        required
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }} />

                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input
                        type="password"
                        name="pass"
                        required
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                </div>
                <div className="button-container">
                    <input type="submit" onClick={LoginRequest}/>
                </div>
            </form>
        </div>
    )
}

export default MyLoginPage;