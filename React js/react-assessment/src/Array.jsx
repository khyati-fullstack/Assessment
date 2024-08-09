import React, { useState } from 'react';

export default function Array() {
    const [arr, setAllarr] = useState(""); // Initialize with an empty string
    const [data, setAlldata] = useState(["Banana", "Apple", "Orange", "Mango", "Pineapple", "Watermelon"]);

    const filterData = data.filter(item =>
        item.toLowerCase().includes(arr.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder='Search' value={arr} onChange={(e) => setAllarr(e.target.value)} />
            <ul>
                {
                    filterData.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
