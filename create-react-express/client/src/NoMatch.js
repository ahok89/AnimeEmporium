import React from "react";
import styled from "styled-components";

const Styles = styled.div`

h1 {
 font-family: 'Ewert', cursive;
 font-size: 230px;
 text-align: center;
}

p {
text-align: center;
font-size: 20px;

}

.fas {
    font-size: 30px;
}

`;


export const NoMatch = () => (
    <Styles>
    <div>
    <h1>404</h1>
    <p>
    <i class="fas fa-meh"></i>
    <br></br>
    <i class="fas fa-meh"></i>Where do you think you're going?<i class="fas fa-meh"></i>
    <br></br>
    <i class="fas fa-meh"></i>
    </p>
    </div>
    </Styles>
)