import React from "react"
import Carousel from "./components/Carousel";
import styled from "styled-components";

const Styles = styled.div`

.App-intro {
background-color: blue;
}

.one {
  background-color: black;
  color: white;
  text-align: left;
  margin-right: 1095px;
  width: 15%;
}

.second {
  background-color: black;
  color: white;
  text-align: right;
  margin-left: 1095px;
  width: 15%;
}
`;


export const Home = () => (
<Styles>
    <div className="App">
        <p className="App-intro">
          <div className="container one">
            <div className="row">
              <div className="col">
                User:
                </div>
                </div>
                </div>

            <div className="container third">
            <div className="row">
              <div className="col">
                <Carousel/>
                <div></div>

                </div>
            </div>
            </div>
        
<br></br>
</p>
       <p>We are An-Y.</p>
      <p>An Orlando, FL duo team, which consists of Andrew & Yadira</p>
      </div >
      </Styles>
)
