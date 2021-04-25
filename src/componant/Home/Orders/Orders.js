import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [dependance, setDependance] = useState([]);

    useEffect(() => {
        axios.get("https://frozen-fjord-85553.herokuapp.com/orders")
            .then(function (response) {
                const data = response.data;
                setOrders(data);
                console.log(data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }, [dependance])

    const handleDeleteOrder = (id) => {
        axios.post('https://frozen-fjord-85553.herokuapp.com/deleteOrder', { id })
            .then(function (response) {
                setDependance(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="table-responsive">
            <h1>Orders</h1>
            <div style={{ height: '200px', width: '400px', backgroundColor: "#42f59b", margin: "15px 0px", borderRadius: '20px', display: "flex", alignItems: "center", justifyContent: 'center' }}>
                <h1>Total Order: {orders.length}</h1>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Note</th>
                        <th scope="col">OrderId</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Ordered Total Price</th>
                        <th scope="col">Products Id</th>
                        <th scope="col">Products Quantity</th>
                        <th scope="col">Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr>
                                <th scope="row">{order.name}</th>
                                <td>{order.address}</td>
                                <td>{order.note}</td>
                                <td>{order.orderId}</td>
                                <td>{order.phone}</td>
                                <td> Tk. {order.total}</td>
                                <td>
                                    <ul>
                                        {order.orderProducts.product.map(product => <li>{product}</li>)}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {order.orderProducts.quantity.map(quantity => <li>{quantity}</li>)}
                                    </ul>
                                </td>
                                <td> <button onClick={() => handleDeleteOrder(`${ order.orderId }`)} className="btn btn-danger"> <FontAwesomeIcon icon={faTrashAlt} /></button> </td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;