import React from "react";
import styled from "styled-components";

const Styles = styled.div`

h1 {
 font-family: 'Ewert', cursive;
 font-size: 200px;
 text-align: center;
}

p {
text-align: center;
}

`;



export const NoMatch = () => (
    <Styles>
    <div>
    <h1>404</h1>
    <p>
       
        Where do you think you're' going?
    </p>
    </div>
    </Styles>
)