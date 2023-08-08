import React, {useEffect, useState} from 'react';
import axios from 'axios';

const List_product = (video) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // function sleep(ms) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    useEffect(() => { // Function to fetch data from the API
        const urlSearchParams = new URLSearchParams(window.location.search);

        // Extract the value of the "userId" parameter
        const id = urlSearchParams.get('id');
        const fetchData = async () => {
            try {
                // const response = await axios.get('http://localhost:3001/api/video/videos');
                const response = await axios.get('http://localhost:3001/api/product/products/'+id);
                // 64d10db5389de905c3e3b891
                console.log("object")
                console.log(JSON.stringify(response.data));
                setData(response.data);
                // await sleep(2000);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data ' + error);
                setLoading(false);
            }
        };

        // Call the fetch function
        fetchData();
    }, []); // Empty dependency array, so it runs only once on mount


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Dats Display</h1>
            <ul> {
                data.map((item) => (
                    <li key={
                        item._id
                    }>

                        <p>Title: {
                            item.title
                        }</p>
                        <p>price: {
                            item.price
                        }</p>
                        <p>link: {
                            item.link_product
                        }</p>
                    </li>
                ))
            } </ul>
        </div>

    );
};

export default List_product;
