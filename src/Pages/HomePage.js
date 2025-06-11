import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer'
export default function HomePage() {

    const navigate = useNavigate();

    const GoLogin = () => {
        navigate("/login");
    }

    const studenlist = [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 21 },
    ]

    return (
        <>
            <div>HomePage</div>
            {studenlist.map((e, i)=>{
                return (
                    <div key={i}>
                        name: {e.name}
                    </div>
                )
            })}
            <button onClick={GoLogin}>Login</button>
        </>
    )
}

