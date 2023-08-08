// Layout.js
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Thumbnail from '../../components/thumbnail';


const Dashboard = () => {

    const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetchData().then(data => {
    //         setData(data);
    //     });
    // }, []);
    return (
        <div>
            <Header/>
            <main>
                <Thumbnail ></Thumbnail>
            </main>
            <Footer/>
        </div>
    );
};

export default Dashboard;
