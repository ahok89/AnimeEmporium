import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, FormGroup, Label, Input, Button, CardLink,
} from "reactstrap";
import styled from "styled-components";

const Styles = styled.div`

.img {
// width: 150px;
}

.fas {
    font-size: 5px;
}
`;


const MainCard = (props) => {
    return (
        <Styles>
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Card body outline color="secondary">
                        <CardImg className="img" top width="100%" src="https://www.pngkey.com/png/detail/125-1252177_kawaii-die-cut-vinyl-stickers-kawaii-stickers-black.png" alt="placeholder image" />
                        <CardBody>
                            <CardTitle>Name: JaneSmith02  </CardTitle>
                            <CardSubtitle>Joined: 2019 </CardSubtitle>
                            <br></br>

                            <CardSubtitle>Location: Orlando, FL </CardSubtitle>
                            <br></br>

                            <CardSubtitle>Current Meetup(s):</CardSubtitle>
                            <CardSubtitle><i class="fas fa-circle"></i> AFO 2019</CardSubtitle>
                            <CardSubtitle><i class="fas fa-circle"></i> Downtown Anilando</CardSubtitle>
                            <CardSubtitle><i class="fas fa-circle"></i> MEGAcon 2020</CardSubtitle>
                            <br></br>

                            <CardText>
                                <FormGroup row>
                                    <Label for="exampleSelectMulti">Top 3 Favorite Anime</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>1) Lupin the 3rd</option>
                                        <option>2) Sailor Moon</option>
                                        <option>3) Cowboy Bepop</option>
                                    </Input>
                                </FormGroup>
                                <Button>Chat Now <i class="far fa-comment-dots"></i></Button>
                                <br></br>
                                <CardLink href="/meetup">Edit</CardLink>
                            </CardText>
                        </CardBody>
                    </Card>
                    <br></br>

                </div>
            </div>
        </div>
        </React.Fragment>
        </Styles>
    );
};

export default MainCard;



// alt img src https://i.pinimg.com/originals/98/29/70/9829701198637e89d0dc62673a04203d.png