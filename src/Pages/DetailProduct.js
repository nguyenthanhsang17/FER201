import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function DetailProduct() {

    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [review, setReview] = useState({});
    const getdetial = async () => {
        const api = await axios.get("http://localhost:9999/products/" + id);
        setProduct(api.data);
        setReview(api.data.reviews);
        console.log(api.data);
    }

    useEffect(() => {
        getdetial();
    }, [])

    return (
        <div>
            id: {product.id}
            <br></br>
            title: {product.title}

            <br></br>
            price: {product.price}
            <br></br>
            category: {product.category}

            <table>
                <thead>
                    <tr>
                        <td>Rating</td>
                        <td>Comment</td>
                        <td>date</td>
                        <td>ReviewName</td>
                    </tr>
                </thead>
                <tbody>
                    {review && Array.isArray(review) ? (
                        review.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>{e.rating}</td>
                                    <td>{e.comment}</td>
                                    <td>{e.date}</td>
                                    <td>{e.reviewerName}</td>
                                </tr>
                            )
                        })
                    ) : ("")}

                </tbody>
            </table >
        </div>
    )
}
