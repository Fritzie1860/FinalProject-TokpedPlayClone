// populate.js

const mongoose = require("mongoose");
const video = require('./Video');
const product = require('./Product');
const comment = require('./Comment');
const user = require('./User');

const videosData = [
    {
        link_thumbnail: "dummy.png",
        link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
        title: "MURAH BGT",
        upload_date: "2022-07-28",
    },
    {
        link_thumbnail: "dummy.png",
        link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
        title: "MURAH BGT",
        upload_date: "2022-07-28",
    },
    {
        link_thumbnail: "dummy.png",
        link_video: "https://www.youtube.com/watch?v=yoBibrIPWJQ",
        title: "MURAH BGT",
        upload_date: "2022-07-28",
    },
];

async function insertVideo(){
    await video.insertMany(videosData);
    console.log("Videos data inserted successfully");
}

async function insertComment(){
    const videos = await video.find();
    for (const Video of videos) {
        await comment.create({
            video_id: Video._id,
            username: "Maleo",
            comment: "ggwp",
            timestamp: Date.now()
        });
    }  
    console.log("Comment data inserted successfully");
}

async function insertProduct(){
    const videos = await video.find();
    for (const Video of videos) {
        await product.create({
          link_product: `https://example.com/product`,
          title: `Product Title for`,
          price: 19.99,
          link_imageProduct: `https://example.com/product.jpg`,
          video_id: Video._id // Gunakan _id dari Video sebagai referensi video_id
        });
    }
    console.log("Product data inserted successfully");
}

async function populateDatabase() {
  await mongoose.connect("mongodb://localhost:27017/final_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await insertVideo();
  await insertComment();
  await insertProduct();
}

populateDatabase();
