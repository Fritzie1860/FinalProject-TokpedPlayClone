// Layout.js
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List_product from './components/list_product';


const Video = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        // Function to fetch data from the API
        // Get the current URL search parameters
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
        // console.log("mak " + JSON.stringify(response));
    }, []); 
    return (
        <div>
            <Header/>
            <main>
                <List_product list={data}></List_product>
            </main>
            <Footer/>
        </div>
    );
};

export default Video;
