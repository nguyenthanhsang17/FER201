import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react'
export default function CreateProduct() {

    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [Price, setPrice] = useState("");


    const getIdProduct = async () => {
        const apiresponse = await axios.get("http://localhost:9999/products");
        const listproduct = apiresponse.data;
        const id = listproduct[listproduct.length-1].id;
        const number = parseInt(id)+1;
        return number+"";
    }

    const clickCreate = async () => {
        const products = {
            id: await getIdProduct(),
            title: Title,
            category: Category,
            price: Price
        }
        const apiresponse = await axios.post("http://localhost:9999/products", products);
        const data = apiresponse.status;

        console.log(data);

    }

    return (
        <>
            <table>
                <tr>
                    <td>Title</td>
                    <td><input type='text' required onChange={(e => {
                        setTitle(e.target.value);
                    })} /></td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td><input type='text' required onChange={(e) => {
                        setCategory(e.target.value);
                    }} /></td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td><input type='text' required onChange={(e) => {
                        setPrice(e.target.value);
                    }} /></td>
                </tr>
                <button onClick={clickCreate}>Create</button>
            </table>
        </>
    )
}
