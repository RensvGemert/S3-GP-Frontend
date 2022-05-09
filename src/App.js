import React from "react";
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
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';



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

const dataProvider = jsonServerProvider('http://localhost:8080/api', fetchJson, httpClient);

const App = () => (
  <Admin theme={theme} 
    authProvider={authProvider}
    dataProvider={dataProvider}
    dashboard={Dashboard}>
        <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={PersonIcon} />
        <Resource name="products" list={ProductList} edit={ProductEdit} create={ProductCreate} icon={InventoryIcon}/>
  </Admin>
);

export default App;