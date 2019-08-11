import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, FormGroup, Label, Input, Button
} from 'reactstrap';


const MainCard = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Card body outline color="secondary">
                        <CardImg top width="100%" src="https://www.pngkey.com/png/detail/125-1252177_kawaii-die-cut-vinyl-stickers-kawaii-stickers-black.png" alt="placeholder image" />
                        <CardBody>
                            <CardTitle>Name: </CardTitle>
                            <CardSubtitle>Joined: </CardSubtitle>
                            <CardSubtitle>Location: </CardSubtitle>
                            <CardSubtitle>Current Meetups: </CardSubtitle>
                            <br></br>
                            <CardText>
                                <FormGroup row>
                                    <Label for="exampleSelectMulti">Top 4 Favorite Anime</Label>
                                    <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        {/* <option>5</option> */}
                                    </Input>
                                </FormGroup>
                                <Button>Chat Now <i class="far fa-comment-dots"></i></Button>
                            </CardText>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default MainCard;



// alt img src https://i.pinimg.com/originals/98/29/70/9829701198637e89d0dc62673a04203d.png