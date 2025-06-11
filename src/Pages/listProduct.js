import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ListProduct() {

    const [products, setProducts] = React.useState([]);
    const [title, settitle] = React.useState("");
    const [minprice, minsetprice] = React.useState("");
    const [maxprice, maxsetprice] = React.useState("");
    const [category, setcategory] = React.useState("");

    const [ListCategory, setListCategory] = React.useState({});
    const navigate = useNavigate();

    const getallproduct = async () => {
        const apiresponse = await axios.get("http://localhost:9999/products");
        const listproduct = apiresponse.data;
        setProducts(listproduct);
        setListCategory([...new Set(listproduct.map(p => p.category))]);
    }
    useEffect(() => {

        getallproduct();
    }, []);


    const godetails = (id) => {
        console.log(id);
        navigate("/detail/" + id);
    }

    const UpdateProduct = (id) => {
        console.log(id);
        navigate("/update/" + id);
    }

    const Delete = async (id) => {
        const apiresponse = await axios.delete("http://localhost:9999/products/" + id);
        console.log(apiresponse.status);
        getallproduct();
    }

    const search = async () => {
        let url = "http://localhost:9999/products";
        if (title) {
            url += "?title=" + title;
        }
        const apiresponse = await axios.get(url);
        const listproduct = apiresponse.data;

        const min = parseFloat(minprice);
        const max = parseFloat(maxprice);


        const beautyProducts = listproduct.filter(p => {
            const price = parseFloat(p.price);
            return (min<price&&max>price);
        });


        setProducts(beautyProducts);


    }


    return (
        <>
            <div> this is list product</div>
            <div>
                title <input type="text" onChange={(e) => {
                    settitle(e.target.value);
                }} />
                <br></br>
                category
                {(ListCategory && Array.isArray(ListCategory)) ? (ListCategory.map((e, i) => {
                    return (
                        <div key={i}>
                            <input type='checkbox' /> {e}
                        </div>
                    )
                })) : ("")}
                min Price <input type="text" onChange={(e) => {
                    minsetprice(e.target.value);
                }} />

                max Price <input type="text" onChange={(e) => {
                    maxsetprice(e.target.value);
                }} />

                <button onClick={()=>{
                    search();
                }}>search</button>
            </div>
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
                                <td><button onClick={() => {
                                    Delete(e.id)
                                }} >Delete</button></td>
                                <td><button onClick={() => {
                                    UpdateProduct(e.id)
                                }} >Update</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table >




        </>
    )
}
