import React from "react"
import Carousel from "./components/Carousel";

export const Home = () => (

    <div className="App">
        <div className="App-header">
        <div className="container">
        <div className="row">
            <div className="col">
                <h2>Anime Emporium</h2>
            </div>

            <div className="col">
                genre drop down
        
            </div>

            <div className="col">
                search bar 
            </div>

              <div className="col login">
                login/sign up 
            </div>

</div>
</div>
</div>
<br></br>

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
              <div className="col carousel">

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
    
)