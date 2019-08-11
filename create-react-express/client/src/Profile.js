import React from "react";
import styled from "styled-components";
import CardProfile from "./components/CardProfile";

const Styles = styled.div`


`;


export const Profile = () => (
    <Styles>
        <div className="App">

            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Profile</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <CardProfile />
                    </div>
                </div>
            </div>

            </div>
    </Styles>
        )