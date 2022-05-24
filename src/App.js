import React, { useEffect } from "react";
import { Admin, Resource , fetchUtils} from "react-admin";
import authProvider from "./authProvider";
import jsonServerProvider from 'ra-data-json-server';
import ProductList from './components/ProductList'
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/ProductEdit";
import UserCreate from "./components/UserCreate";
import ProductCreate from "./components/ProductCreate";
import { createTheme } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard';
import FieldList from './components/FieldList'
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import { FieldCreate } from "./components/FieldCreate";
import FieldEdit from "./components/FieldEdit";
import { CategoryList } from "./components/CategoryList";
import { CategoryEdit } from "./components/CategoryEdit";
import { CategoryCreate } from "./components/CategoryCreate";

const theme = createTheme({
  palette: {
    type: 'dark', 
        secondary: {
            main: "#0089c1"
        }
  },
});

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Access-Control-Allow-Origin', '*');
    return fetchUtils.fetchJson(url, options);
}

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth'));
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const userCompanyId = localStorage.getItem(`companyId`);
const productsByCompany = `company/${userCompanyId}/products`;
const dataProvider = jsonServerProvider('http://localhost:8080/api', fetchJson, httpClient);

const companyId = localStorage.getItem('companyId');

const companyRole = localStorage.getItem('companyRole');

const App = () => {

  // if admin
  if(companyId === '1') {
    return (
    <Admin theme={theme} 
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PersonIcon} />
        <Resource name={productsByCompany} options={{ label: 'Products' }} list={ProductList} edit={ProductEdit} create={ProductCreate} icon={InventoryIcon} />
        <Resource name="fields" list={FieldList} create={FieldCreate} edit={FieldEdit} />
        <Resource name="categories" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
        <Resource name="productcategories" />
    </Admin>
    );
  }

  // if supplier
  if(companyRole === '1') {
    return (
    <Admin theme={theme} 
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PersonIcon} />
        <Resource name={productsByCompany} options={{ label: 'Products' }} list={ProductList} edit={ProductEdit} create={ProductCreate} icon={InventoryIcon} />
        <Resource name="fields" />
        <Resource name="categories" />
        <Resource name="productcategories" />
    </Admin>
    );
  }

  // if retailer
  if(companyRole === '2') {
  return (
    <Admin theme={theme} 
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PersonIcon} />
        <Resource name={productsByCompany} options={{ label: 'Products' }} list={ProductList} icon={InventoryIcon} />
    </Admin>
    );
  }

  return (
    <Admin theme={theme} 
      authProvider={authProvider}
      dataProvider={dataProvider}
      dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PersonIcon} />
        <Resource name={productsByCompany} options={{ label: 'Products' }} list={ProductList} icon={InventoryIcon} />
    </Admin>
    );

}
export default App;





//  {/* if supplier of admin*/}
