import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AddProduct = () => {
    const [category, setCategory] = useState()
    const handleCategory = (e) => {
        const data = e.target.value;
        setCategory(data);
    }
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        const Data = new FormData();
        Data.append('image', data.image[0]);
        Data.append('image2', data.image2[0]);
        Data.append("name", data.name);
        Data.append("price", data.price);
        Data.append("productID", Math.random().toString(36).split(".")[1]);
        Data.append("description", data.description)
        Data.append("category", category)
        Data.append("isFlashSell", false)

        axios.post('https://frozen-fjord-85553.herokuapp.com/addproduct', Data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('addProduct').reset();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="">
            <h1>Add Products</h1>

            <form id='addProduct' onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input  {...register("name", { required: true })} type="name" class="form-control" id="inputName" />
                </div>
                <div class="col-md-6">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input  {...register("price", { required: true })} type="number" class="form-control" id="inputPrice" />
                </div>

                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupSelect01">Category</label>
                    <select style={{ textTransform: "uppercase" }} onChange={handleCategory} class="form-select" id="inputGroupSelect01">
                        <option value="MOBILE">MOBILE</option>
                        <option value="ELECTRONIC">ELECTRONIC</option>
                        <option value="DRESS">Dress</option>
                        <option value="FOOD">Food</option>
                    </select>
                </div>


                <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <textarea {...register("description", { required: true })} type="text" class="form-control" id="inputDescription" placeholder="Description" />
                </div>

                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input {...register("image", { required: true })} type="file" class="form-control" id="inputGroupFile01" />
                </div>

                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input {...register("image2")} type="file" class="form-control" id="inputGroupFile01" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Add Product</button>
                </div>
            </form>

        </div>
    );
};

export default AddProduct;