import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [dependance, setDependance] = useState([]);
    useEffect(() => {
        axios.get('https://frozen-fjord-85553.herokuapp.com/manageproducts')
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
    }, [dependance])

    const handleDelete = (id) => {
        axios.post('https://frozen-fjord-85553.herokuapp.com/deleteProduct', { id })
            .then(function (response) {
                setDependance(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handleAddtoFlashSell = (id, status) => {
        axios.post('https://frozen-fjord-85553.herokuapp.com/addFlashSell', {
            productId: id,
            isFlashSell: status
        })
            .then(function (response) {
                setDependance(response);
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
                            <td>Tk. {product.price}</td>
                            <td>{product.category}</td>
                            <td>{product.productID}</td>
                            <td>
                                <div onClick={() => handleDelete(`${ product.productID }`)} className="btn btn-danger me-2">Delete</div>
                                <div onClick={() => handleAddtoFlashSell(`${ product.productID }`, `${ product.isFlashSell }`)} className="btn btn-danger">{
                                    product.isFlashSell === "true" ? "Remove on Flash Sell" : "Add to Flash Sell"
                                }</div>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
};

export default ManageProducts;