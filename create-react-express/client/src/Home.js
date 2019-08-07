import React from "react"
import Carousel from "./components/Carousel";
import styled from "styled-components";

const Styles = styled.div`

.App-intro {
background-color: blue;
}

.one {
  text-align: left;
  background-color: pink;
  margin-right: 972px;
}

.third {
  margin-left: 960px;
  width: 15%;
  text-align: right;
  background-color: black;
  color: white;
}
`;


export const Home = () => (
<Styles>
    <div className="App">
        <p className="App-intro">
          <div className="container">
            <div className="row one">
              <div className="col">
                User:
                </div>
                </div>

                <div className="container third">
            <div className="row">
              <div className="col">
                random anime
                </div>
            </div>
            </div>
            <br></br>

            <div className="container second">
            <div className="row">
              <div className="col">

                <Carousel/>
                <div></div>

                </div>
            </div>
            </div>
          </div>

<br></br>
        We are An-Y.
        </p>
      <p>An Orlando, FL duo team, which consists of Andrew & Yadira</p>
      </div >
      </Styles>
)
