import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const Thumbnail = (video) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // function sleep(ms) {
    //     return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    useEffect(() => { // Function to fetch data from the API
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/video/videos');
                // const response = await axios.get('http://localhost:3001/api/product/products/64d10db5389de905c3e3b891');
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
        // <div>
        //     <h1>Dats Display</h1>
        //     <ul> {
        //         data.map((item) => (
        //             <li key={
        //                 item._id
        //             }>
        //                 {/* <img src={'../assets/'+item.link_thumbnail} alt="Thumbnail" /> */}
        //                 {/* <ImageDisplay imageName={item.link_thumbnail}></ImageDisplay> */}
        //                 <p>Title: {
        //                     item.title
        //                 }</p>
        //                 <p>Video Link: {
        //                     item.link_video
        //                 }</p>
        //                 <p>Upload Date: {
        //                     item.upload_date
        //                 }</p>
        //                 <button onClick={() => {
        //                   window.location.href= "http://localhost:3000/video?id="+item._id;
        //                   // console.log('click');
        //                 }}>
        //                     <img src={
        //                             item.link_thumbnail
        //                         }
        //                         alt="Thumbnail"/>
        //                 </button>

        //                 {/* <p>Title: {item.title}</p>
        //     <p>price: {item.price}</p>
        //     <p>link: {item.link_product}</p> */} </li>
        //         ))
        //     } </ul>
        // </div>

        <div className="container">
      <div className="row">
        {data.map(video => (
          <div className="col-md-2 mb-2" key={video._id}>
            <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={video.link_thumbnail} />
      <Card.Body>
        <Card.Title>{video.title}</Card.Title>
        <Card.Text>{video.upload_date}</Card.Text>
        <a href={"http://localhost:3000/video?id="+video._id} target="_blank" rel="noopener noreferrer">Watch Video</a>
      </Card.Body>
    </Card>
          </div>
        ))}
        
      </div>
    </div>

    );
};

export default Thumbnail;
