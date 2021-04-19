import React from 'react';
import { Route, Router } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
    return (
        <div className='container-fluid row'>
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <Route path='/addProduct'>
                    <AddProduct></AddProduct>
                </Route>
                <Route path='/manageproducts'>
                    <ManageProducts></ManageProducts>
                </Route>
            </div>
        </div>
    );
};

export default Home;