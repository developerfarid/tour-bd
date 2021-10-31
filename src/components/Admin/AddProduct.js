import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './Admin.css';


const AddProduct = () => {
    const myAlartForDataAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your Data has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const myAlartForDataNotAdd = () => {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: ' Opps! Something worng.',
            showConfirmButton: false,
            timer: 1500
          })
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        axios.post("https://ghoulish-pumpkin-61403.herokuapp.com/allProduct", data)
            .then(response => {
                if (response.data.insertedId) {
                    myAlartForDataAdd()
                    reset()
                }
                else {
                    myAlartForDataNotAdd()
                }
            })
    }
    
    return (
        <div>
            <form className="form-style " onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <label className="label" htmlFor="title">Tour Title</label>
                <input placeholder="Tour Title" {...register("title", { required: true})} />
                <label className="label" htmlFor="title">Tour Rating</label>
                <input type="number" placeholder="Tour Rating" {...register("rating", { required: true})} />
                <label className="label" htmlFor="title">Tour Image URL</label>
                <input placeholder="Image URL" {...register("url", { required: true})} />
                <label className="label" htmlFor="">Tour Condition Type</label>
                <select {...register("type" , { required: true})}>
                    <option value="good">Good</option>
                    <option value="superb">Superb</option>
                    <option value="perfect">Perfect</option>
                </select>
                <label className="label" htmlFor="des">Tour Description</label>
                <textarea placeholder="Tour Description" {...register("description", { required: true})} />
                <label className="label" htmlFor="price">Tour Price</label>
                <input type="number" placeholder="Tour Price" {...register("price", { required: true})} />
                <label className="label" htmlFor="review">Tour Review</label>
                <input type="number" placeholder="Tour Review" {...register("review", { required: true})} />
                <label className="label" htmlFor="destination">Destination</label>
                <input placeholder="Destination " {...register("destination", { required: true})} />
                <label className="label" htmlFor="destination">Departure</label>
                <input placeholder="Departure " {...register("departure", { required: true})} />
             
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                <input className="btn btn-info mt-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;