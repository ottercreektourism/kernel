import React from "react";
// import { searchYoutube } from '../utils/API';
const axios = require('axios');

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

function Resources() {

  // axios
  //   .get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=meditation&key=AIzaSyB8HWYbj4bs0Nc2BmA3IihS80y324jtR5g')
  //   .then(res => {
  //     // console.log(`statusCode: ${res.status}`);
  //     console.log(res.data.items);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

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
      <div className="mx-auto mt-4 mb-4"><h3>Guided Meditation Videos</h3> </div>
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

    </>
  );
}

export default Resources;