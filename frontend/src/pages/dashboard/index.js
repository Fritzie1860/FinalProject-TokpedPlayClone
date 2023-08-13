import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Thumbnail from "../../components/Thumbnail";

const Dashboard = () => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //     fetchData().then(data => {
  //         setData(data);
  //     });
  // }, []);
  return (
    <>
      <Header />
      <main>
        <Thumbnail />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
