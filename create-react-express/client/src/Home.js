import React from "react";
import Carousel from "./components/Carousel";
import Random from "./components/Random";
import CardMeetUp from "./components/CardMeetUp";
// import styled from "styled-components";


// const Styles = styled.div`

// .App-intro {
// background-color: white;
// }

// `;

export const Home = () => (

    <div className="App">
            
            <div className="row">
              <div className="col">
                <CardMeetUp />
                </div>
              <div className="col">
                <Carousel />
                </div>
              <div className="col">
                <Random />
                </div>

            </div>
            
        

<br></br>
       <p>We are An-Y</p>
      <p>An Orlando, FL duo team, that consists of Andrew & Yadira</p>
    </div >
      
);
