import React from "react"
import Carousel from "./components/Carousel";
import styled from "styled-components";

const Styles = styled.div`

.upcoming {
  text-align: left;
}

`;


export const Home = () => (
<Styles>
    <div className="App">
        <p className="App-intro">
          <div className="container">
            <div className="row">
              <div className="col upcoming">
                upcoming anime:
                </div>
                </div>
                <br></br>

                <div className="container">
            <div className="row">
              <div className="col random">
                random anime
                </div>
            </div>
            </div>
            <br></br>

            <div className="container">
            <div className="row">
              <div className="col">

                <Carousel/>
                <div></div>

                </div>
            </div>
            </div>

            <div className="row">
              <div className="col">
              popular anime
                </div>
            </div>

            <div className="row">
              <div className="col">
              all time favorite anime
                </div>
            </div>
          </div>

<br></br>
        We are An-Y.
        </p>
      <p>We are a duo team, which consists of Andrew & Yadira, based out of Orlando, FL.</p>
      </div >
      </Styles>
)
