import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';


const Random = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Card color="secondary">
                        <CardImg top width="100%" src="#" alt="RANDOM-add image here placeholder image" />
                        <CardBody>
                            <CardTitle>Name: </CardTitle>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Random;
