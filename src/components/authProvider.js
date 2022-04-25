import {
    AUTH_GET_PERMISSIONS,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_ERROR,
    AUTH_CHECK,
} from 'react-admin';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


export default (type, params, props) => {

    if (type === AUTH_LOGIN) {
        const { username, password } = params;

        // simple user username password, redirect function.
        if (username === 'user' && password === 'password') {
            sessionStorage.setItem('role', 'user');
            sessionStorage.removeItem('not_authenticated');

            return Promise.resolve();
        }
        //admin  role   username and password
        if (username === 'admin' && password === 'password') {
            sessionStorage.setItem('role', 'admin');
            sessionStorage.removeItem('not_authenticated');
            return Promise.resolve();
        }
        sessionStorage.setItem('not_authenticated', true);
        return Promise.reject();
    }
    if (type === AUTH_LOGOUT) {
        sessionStorage.setItem('not_authenticated', true);
        sessionStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        const { status } = params;
        return status === 401 || status === 403
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_CHECK) {
        return sessionStorage.getItem('not_authenticated')
            ? Promise.reject()
            : Promise.resolve();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = sessionStorage.getItem('role');
        return Promise.resolve(role);
    }

    return Promise.reject('Unknown method');
};