import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleSelectMulti">Select One</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>Action</option>
            <option>Adventure</option>
            <option>Cars</option>
            <option>Comedy</option>
            <option>Dementia</option>
            <option>Demons</option>
            <option>Mystery</option>
            <option>Drama</option>
            <option>Fantasy</option>
            <option>Game</option>
            <option>Historical</option>
            <option>Horror</option>
            <option>Kids</option>
            <option>Magic</option>
            <option>Martial Arts</option>
            <option>Mecha</option>
            <option>Music</option>
            <option>Parody</option>
            <option>Samurai</option>
            <option>Romance</option>
            <option>School</option>
            <option>Sci Fi</option>
            <option>Shoujo</option>
            <option>Shounen</option>
            <option>Space</option>
            <option>Sports</option>
            <option>Super Power</option>
            <option>Vampire</option>
            <option>Yaoi</option>
            <option>Yuri</option>
            <option>Harem</option>
            <option>Slice of Life</option>
            <option>Supernatural</option>
            <option>Military</option>
            <option>Police</option>
            <option>Psychological</option>
            <option>Thriller</option>
            <option>Seinen</option>
            <option>Josei</option>
          </Input>
        </FormGroup>
      </Form>
    );
  }
}