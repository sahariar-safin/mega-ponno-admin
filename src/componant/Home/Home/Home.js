import React from 'react';
import { Route, Router } from 'react-router';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import Orders from '../Orders/Orders';
import Sidebar from '../Sidebar/Sidebar';
import UploadBanner from '../UloadBanner/UploadBanner';

const Home = () => {
    return (
        <div className='container-fluid row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <Route path='/addProduct'>
                    <AddProduct></AddProduct>
                </Route>
                <Route path='/manageproducts'>
                    <ManageProducts></ManageProducts>
                </Route>
                <Route path='/uploadbanner'>
                    <UploadBanner></UploadBanner>
                </Route>
                <Route path='/orders'>
                    <Orders></Orders>
                </Route>
            </div>
        </div>
    );
};

export default Home;