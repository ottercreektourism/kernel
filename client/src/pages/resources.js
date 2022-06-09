import React from "react";
// import { searchYoutube } from '../utils/API';
// const axios = require('axios');
// const key = process.env.API_KEY
const resourceInfo = [
  {
    name: "Mindful",
    description: 'Mindful is the voice of the emerging mindfulness community. We work to provide insight, information, and inspiration to help us all live more mindfully.',
    link: "https://www.mindful.org/",
    image: "mindful.png",
    imageAlt: "Image from mindful.org",
  },
  {
    name: "brain.fm",
    description: "Brain.fm is a collaboration between scientists, musicians and developers who each believe that the best approach to functional music is not curation of existing music, but through research, testing, and in every way crafting music with function first.",
    link: "https://www.brain.fm/",
    image: "brainfm.png",
    imageAlt: "",
  },
  {
    name: "Calm",
    description: "Calm’s mission is to make the world happier and healthier. Calm is a meditation, sleep and relaxation app, available in both the App Store and Google Play store.",
    link: "https://www.calm.com/",
    image: "calm.jpeg",
    imageAlt: "",
  },
];

const videoInfo = [
  {
    name: "Relaxing Music 24/7, Stress Relief Music, Sleep Music, Meditation Music, Study, Calming Music",
    description: '',
    link: "https://www.youtube.com/watch?v=uUYGAYlOtaM",
    image: "live.png",
    imageAlt: "Image from mindful.org",
  },
  {
    name: "Daily Calm | 10 Minute Mindfulness Meditation | Be Present",
    description: "Tamara Levitt guides this 10 minute Daily Calm mindfulness meditation to powerfully restore and re-connect with the present.",
    link: "https://www.youtube.com/watch?v=ZToicYcHIOU",
    image: "be-present.png",
    imageAlt: "",
  },
  {
    name: "Daily Calm | 10 Minute Mindfulness Meditation | Letting Go",
    description: "Tamara Levitt guides this 10 minute Daily Calm mindfulness meditation on letting go.",
    link: "https://www.youtube.com/watch?v=syx3a1_LeFo",
    image: "lettinggo.png",
    imageAlt: "",
  },
];

function Resources() {

  // axios
  //   .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=meditation&key=AIzaSyB8HWYbj4bs0Nc2BmA3IihS80y324jtR5g`)
  //   .then(res => {
          
          // const title = res.data.items[0].snippet.title;
          // const description = res.data.items[0].snippet.description;
          // const thumbnail = res.data.items[0].snippet.thumbnails.default;
          // const videoId = res.data.items[0].id.videoId;

          // for(let i = 0; i < res.length; i++) {
          //   return 
          // }
          // aaaaaaaaaaaahh!
  //     // console.log(res.data.items[0].snippet.title);
  //     // console.log(res.data.items[0].snippet.description);
  //     // console.log(res.data.items[0].snippet.thumbnails.default);
  //     // console.log(res.data.items[0].id.videoId);



  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // const mystyle = {
  //   padding: "10px",
  //   height: '278px',
  //   width: '400px'
  // };

  return (

    <>

      <div className="mx-auto mt-4 mb-4"><h3>Resources</h3> </div>
      <div className="card-group">

        {resourceInfo.map((info) => {
          return (
            <div className="card">
              <img className="card-img-top" src={require(`../images/${info.image}`)} alt="Card image cap"></img>
              <div className="card-body">
                <h5 className="card-title">{info.name}</h5>
                <p className="card-text">{info.description}</p>
              </div>
              <div className="card-footer">
                <a href={info.link} className="btn btn-dark" target="_blank">Website</a>
              </div>
            </div>
          );
        })}
      </div>
{/* videos */}
      <div className="mx-auto mt-4 mb-4"><h3>Guided Meditation Videos🧘</h3> </div>
      <div className="card-group">

        {videoInfo.map((video) => {
          return (
            <div className="card">
              {/* <img className="card-img-top" src={require(`../images/${video.image}`)} alt="Card image cap"></img> */}
              <div className="card-body">
                <h5 className="card-title">{video.name}</h5>
                <p className="card-text">{video.description}</p>
              </div>
              <div className="card-footer">
                <a href={video.link} className="btn btn-dark" target="_blank">Click for video</a>
              </div>
            </div>
          );
        })}
      </div>

    </>
  );
}

export default Resources;