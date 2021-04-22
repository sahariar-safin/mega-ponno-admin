import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faUserPlus, faTasks, faHome, faCommentAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar bg-light d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-dark" >
                        <span><FontAwesomeIcon icon={faHome} />Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-dark">
                        <span> <FontAwesomeIcon icon={faList} /> Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addProduct" className="text-dark">
                        <span><FontAwesomeIcon icon={faPlus} />Add Product</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manageproducts" className="text-dark" >
                        <span><FontAwesomeIcon icon={faTasks} />Manage Products</span>
                    </Link>
                </li>
                <li>
                    <Link to="/uploadbanner" className="text-dark" >
                        <span><FontAwesomeIcon icon={faTasks} />Upload Banner</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-dark"> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;