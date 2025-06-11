import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function UpdateProduct() {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getdetial = async () => {
        const api = await axios.get("http://localhost:9999/products/" + id);
        setProduct(api.data);
        console.log(api.data);
    }

    const update =  async () =>{
        const apiresponse = await axios.put("http://localhost:9999/products/"+id, product);
        console.log(apiresponse.status);
    }

    useEffect(()=>{
        getdetial();
    }, [])

  return (
    <>
      <table>
        <tr>
            <td>
                ID
            </td>
            <td>
                <input type='text' value={product.id} readOnly />
            </td>
        </tr>
        <tr>
            <td>
                Title
            </td>
            <td>
                <input type='text' value={product.title} onChange={(e)=>{
                    setProduct({...product, title:e.target.value});
                }} />
            </td>
        </tr>
        <tr>
            <td>
                Category
            </td>
            <td>
                <input type='text' value={product.category} onChange={(e)=>{
                    setProduct({...product, category:e.target.value});
                }} />
            </td>
        </tr>
        <tr>
            <td>
                Price
            </td>
            <td>
                <input type='text' value={product.price}   onChange={(e)=>{
                    setProduct({...product, price:e.target.value});
                }}/>
            </td>
        </tr>
      </table>
      <button onClick={()=>{
        update();
      }}>Update</button>
    </>
  )
}
