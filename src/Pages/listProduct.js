import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ListProduct() {

    const [products, setProducts] = React.useState([]);


    const navigate = useNavigate();

    const getallproduct = async () => {
        const apiresponse = await axios.get("http://localhost:9999/products");
        const listproduct = apiresponse.data;
        setProducts(listproduct);
    }
    useEffect(() => {

        getallproduct();
    }, []);


    const godetails = (id) => {
        console.log(id);
        navigate("/detail/"+id);
    }


    return (
        <>
            <div> this is list product</div>

            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Title</td>
                        <td>Category</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                <td>{e.category}</td>
                                <td>{e.price}</td>
                                <td><button onClick={() => {
                                    godetails(e.id)
                                }} >detail</button></td>
                            </tr>
                )
                    })}
            </tbody>
        </table >




        </>
    )
}
