import React, { useState, useEffect } from "react";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export default function CustomerDashboard() {
  const [classes, setClasses] = useState([]);

  

  let today = new Date();

  let month = today.getMonth();
  let year = today.getFullYear();
  let date = today.getDate();


  useEffect(() => {
    
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://covid-bod.herokuapp.com/api/classes"
      )
      .then((res) => {
        setClasses(res.data);
      })
      .catch((err) => {
        console.log("Get Classes Failure ==>> ", err.message);
      });
  }, []);




  return (
    <div>
      <div className="classInfo">
        <div className="titleBar">
          <h3>{` ${month}/${date}/${year} `}</h3>
          <h3>Description</h3>
          <h3>Enrolled</h3>
          <h3>Intensity</h3>
          <h3>Location</h3>
        </div>
        <div className="border">
          {classes && classes.map((element) => (
             <div className="classDetails">
              <h3>
                {`${element.start_time} - ${element.end_time}`}   
              </h3>
              <h3>
                {element.class_name}
              </h3>
              <h3>
                {`${element.enrolled} of ${element.max_size}`}
              </h3>
              <h3>
                {element.intensity}
              </h3>
              <h3>
                {element.location}
              </h3>
            </div> 
          ))}
        </div>
      </div> 
    </div>
  )
}


{/* <div className="classDetails">
              <h3>
                {`${element.start_time} - ${element.end_time}`}   
              </h3>
              <h3>
                {element.class_name}
              </h3>
              <h3>
                {`${element.enrolled} of ${element.max_size}`}
              </h3>
              <h3>
                {element.intensity}
              </h3>
              <h3>
                {element.location}
              </h3>
            </div> */}





// <br /><br /><br />
//       {<div className="TitleBar" style={{ border: '2px solid black' }}>
//           {month} {date} {year} Description Enrolled Intensity
//         </div> /* End TitleBar div */}

      // {classes && classes.map((element) => (
      //   <div >
      //     {`${element.start_time} - ${element.end_time}`}
      //     {element.class_name} {`${element.enrolled} of ${element.max_size}`}
      //   </div> /* End TitleBar div */
      // ))}
      






// <div>
//        {/* map over classes and render Class component for each one */}
//        {/* needs an input element for search input with onChange handler;
//            this couold be a separate search component */}
//        {/* map over availableClasses and render Class component for each one */}
//        {/* needs to be an element with click listener that sends put request to api
//              to cancel isAttending(might conflate this and below elements to one toggle) */}
//        {/* also need an element with click listener that sends put request to api
//              to confirm isAttending(might conflate this and above elements to one toggle) */}
//        {/* also might need a clear search that sends action to reducer to refetch
//            classlist */}
      
