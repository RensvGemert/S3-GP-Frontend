import * as React from "react";
import { Admin, fetchUtils } from 'react-admin';
import { Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './components/ProductList'
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/ProductEdit";
import UserCreate from "./components/UserCreate";
import ProductCreate from "./components/ProductCreate";
import authProvider from './components/authProvider';
import Dashboard from './components/Dashboard';

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080/api', fetchJson);
const theme = {
    palette: {
        type: 'dark',
        secondary: {
            main: "#0089c1"
        }
    },
};

const App = () => (
    <Admin
        style={{ backgroundColor: 'black' }}
        theme={theme}
        dashboard={Dashboard}
        authProvider={authProvider}
        dataProvider={dataProvider}
        requireAuth >
        {sessionStorage.getItem('role') === "admin" ? (
            <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
           
        ) : (
            <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
        )
        }
    </Admin>
);



export default App;