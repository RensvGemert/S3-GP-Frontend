import * as React from "react";
import { Admin, Resource, fetchUtils, ListGuesser, List } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './components/ProductList'
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/ProductEdit";
import UserCreate from "./components/UserCreate";
import ProductCreate from "./components/ProductCreate";
import CompanyList from './components/CompanyList'
import simpleRestProvider from 'ra-data-simple-rest';
import CompanyCreate from "./components/CompanyCreate";

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    // add your own headers here
    options.headers.set('Access-Control-Allow-Origin', '*');
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider('http://localhost:8080/api', fetchJson);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name="company" list={CompanyList} create={CompanyCreate} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} />
    </Admin>
);

export default App;