// import {
//     AUTH_GET_PERMISSIONS,
//     AUTH_LOGIN,
//     AUTH_LOGOUT,
//     AUTH_ERROR,
//     AUTH_CHECK,
// } from 'react-admin';

// const authProvider = (type, params, props) => {

//     if (type === AUTH_LOGIN) {
//         const { email, password } = params;

//         // retailer
//         if (email === 'retailer@gmail.com' && password === 'retailer') {
//             sessionStorage.setItem('role', 'retailer');
//             sessionStorage.removeItem('not_authenticated');

//             return Promise.resolve();
//         }
//         //admin  role   username and password
//         if (email === 'supplier' && password === 'supplier') {
//             sessionStorage.setItem('role', 'supplier');
//             sessionStorage.removeItem('not_authenticated');
//             return Promise.resolve();
//         }
//         sessionStorage.setItem('not_authenticated', true);
//         return Promise.reject();
//     }
//     if (type === AUTH_LOGOUT) {
//         sessionStorage.setItem('not_authenticated', true);
//         sessionStorage.removeItem('role');
//         return Promise.resolve();
//     }
//     if (type === AUTH_ERROR) {
//         const { status } = params;
//         return status === 401 || status === 403
//             ? Promise.reject()
//             : Promise.resolve();
//     }
//     if (type === AUTH_CHECK) {
//         return sessionStorage.getItem('not_authenticated')
//             ? Promise.reject()
//             : Promise.resolve();
//     }
//     if (type === AUTH_GET_PERMISSIONS) {
//         const role = sessionStorage.getItem('role');
//         return Promise.resolve(role);
//     }

//     return Promise.reject('Unknown method');
// };

// export default authProvider;


const authProvider = {
    // send username and password to the auth server and get back credentials
    login: params => Promise.resolve(),
    // when the dataProvider returns an error, check if this is an authentication error
    checkError: error => Promise.resolve(),
    // chen the user navigates, make sure that their credentials are still valid
    checkAuth: params => Promise.resolve(),
    // remove local credentials and notify the auth server that the user logged out
    logout: () => Promise.resolve(),
    // get the user's profile
    getIdentity: () => Promise.resolve(),
    // get the user permissions (optional)
    getPermissions: () => Promise.resolve(),
    // get the user roles (optional - only for Role-Based Access Control)
    getRoles: () => Promise.resolve(),
};

export default authProvider;