import React from "react";
import CardMeetUp from "./components/CardMeetUp";
import styled from "styled-components";

const Styles = styled.div`

.col box {

}

`;


export const MeetUp = () => (
<Styles>
        <div className="App">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Meet Ups</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CardMeetUp />
                    </div>
                </div>
            </div>

            </div>
            </Styles>
  
        )