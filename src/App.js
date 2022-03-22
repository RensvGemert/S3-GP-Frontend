// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import restProvider from 'ra-data-simple-rest'
import { ProductList } from './components/ProductList'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
        <Resource name="posts" list={ListGuesser} />
    </Admin>
);

export default App;