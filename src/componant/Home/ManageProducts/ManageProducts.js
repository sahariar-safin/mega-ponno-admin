import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/manageproducts')
            .then(function (response) {
                const data = response.data;
                setProducts(data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [products])

    const handleDelete = (id) => {
        axios.post('http://localhost:5000/deleteProduct', { id })
            .then(function (response) {
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Category</th>
                    <th scope="col">ProductID</th>
                    <th scope="col">Manage</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product, index) =>
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.productID}</td>
                            <td>
                                <div onClick={() => handleDelete(`${ product.productID }`)} className="btn btn-danger">Delete</div>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default ManageProducts;