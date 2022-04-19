import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-admin";


const current = new Date();

const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;



const Dashboard = () => (
    <>

    <Card style={{marginBottom: '8px'}}>
        <CardContent>
            <h1>Welcome to Piada PIM</h1>     
            <p>Today it is {date}</p>           
        </CardContent>
    </Card>

    
    <div style={{display: 'flex'}}>
    <Link to={"/products"}>
    <Card style={{height: '250px', width: '350px', marginBottom: '8px', marginRight: '8px'}}>
        <CardContent>
            <h2>Products</h2>  
            <p>Quick move to your products page</p>         
        </CardContent>
    </Card>
    </Link>

    <Link to={"/users"}>
    <Card style={{height: '250px', width: '350px', marginBottom: '8px', marginRight: '8px'}}>
        <CardContent>
            <h2>Users</h2>  
            <p>Quick move to your users page</p>     
        </CardContent>
    </Card>
    </Link>

    </div>
    </>
)

export default Dashboard;