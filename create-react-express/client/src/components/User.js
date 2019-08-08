import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle
} from 'reactstrap';


const User = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <Card color="secondary">
                        <CardImg top width="100%" src="#" alt="USER-add image here placeholder image" />
                        <CardBody>
                            <CardTitle>Name: </CardTitle>
                        </CardBody>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default User;

// {/* <Card body inverse color="secondary"></Card>
// <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
//  */}
