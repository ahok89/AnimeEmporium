import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Table from "./components/Table";
import Table2 from "./components/Table2";

const Styles = styled.div`

`;


export const Profile = () => (
    <Styles>
        <div className="App">

            <div className="container profile">
                <div className="row">
                    <div className="col">
                        <h2>Profile</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
            <br></br>


            <div className="container">
                <div className="row">
                    <div className="col">
                    <Table />
                    </div>

                    <div className="col">
                    <Table2 />
                    </div>
                </div>
            </div>
            </div>
    </Styles>
        )