import React, { useState } from 'react';
import '../Css/topicsAndRating.css'; // Assuming you have your CSS file imported
import { IoIosArrowDown } from "react-icons/io";
import videoplay from '../assets/videoplayback.mp4'
import video2 from '../assets/video2.mp4'
import CourseDetails from '../Pages/CourseDetails';

const ItemList = ({handleVideoSelect}) => {
  // Dummy data for the items and descriptions
  const items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1', lessons: 20, duration: '2:33:32',url: videoplay },
    { id: 2, name: 'Item 2', description: 'Description of Item 2', lessons: 15, duration: '1:45:12',url: video2},
    { id: 3, name: 'Item 3', description: 'Description of Item 3', lessons: 25, duration: '3:00:00' },
  ];

  const [expandedItemId, setExpandedItemId] = useState(null);

  const handleClick = (itemId) => {
    if (itemId === expandedItemId) {
      setExpandedItemId(null); 
    } else {
      setExpandedItemId(itemId);
    }
  };

  const [selectedVideo, setSelectedVideo] = useState(null);
  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    // Call the handleVideoSelect function passed as a prop
    if (handleVideoSelect) {
      handleVideoSelect(video);
    }
  };

  return (
    <>
    <div className="container text-center">
      {items.map((item) => (
        <div className="row topic_list_tabs_cont" key={item.id} onClick={() => handleClick(item.id)}>
          <div className={`col-lg-6 col-md-6 col-sm-12  ${expandedItemId === item.id ? 'mb-3' : ''}`}>
          
          <div className='d-flex align-items-center pt-2'>
            <IoIosArrowDown className=''/>

            <li  style={{ cursor: 'pointer' }}>
              {item.name}
            </li>
            </div>
           
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-evenly">
              <div className="d-flex">
                <i className="fa-solid fa-file card_icon" style={{ color: '#F57D20' }}></i>
                <p className="details_courses_card">{item.lessons} درس</p>
              </div>
              <div className="d-flex">
                <i className="fa-solid fa-clock card_icon" style={{ color: '#F57D20' }}></i>
                <p className="details_courses_card">{item.duration}</p>
              </div>
            </div>
          </div>
          {expandedItemId === item.id && (
              <div className=" d-flex justify-content-between">
                <p style={{ marginTop: '10px' }}>{item.description}</p>
                <div className='d-flex'>
                <button className='show_video_btn' onClick={() => handleVideoClick(item)}>مشاهدة <i class="fa-regular fa-circle-play" style={{color: "#fff"}}></i>               
                </button>
                
                </div>
              </div>
            )}
        </div>
      ))}

    </div>
    </>

  );
};

export default ItemList;
