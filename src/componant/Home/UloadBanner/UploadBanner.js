import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-dropdown/style.css';

const UploadBanner = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => {
        const Data = new FormData();
        Data.append('image', data.image[0]);
        Data.append("name", data.name);

        axios.post('https://frozen-fjord-85553.herokuapp.com/uloadbanner', Data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(function (response) {
                document.getElementById('inputName').value = "";
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="">
            <h1>Upload Banner</h1>

            <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Name</label>
                    <input  {...register("name", { required: true })} type="name" class="form-control" id="inputName" />
                </div>
                <div class="input-group mb-3">
                    <label class="input-group-text" for="inputGroupFile01">Upload Image</label>
                    <input {...register("image", { required: true })} type="file" class="form-control" id="inputGroupFile01" />
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Upload Banner</button>
                </div>
            </form>

        </div>
    );
};

export default UploadBanner;