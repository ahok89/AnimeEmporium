import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

export default class Checkbox extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" /> Action 
            <br></br>
            <Input type="checkbox" /> Adventure 
            <br></br> 
            <Input type="checkbox" /> Cars  
            <br></br>
            <Input type="checkbox" /> Comedy  
            <br></br>
            <Input type="checkbox" /> Dementia 
            <br></br>  
            <Input type="checkbox" /> Demons 
            <br></br>
            <Input type="checkbox" /> Mystery 
            <br></br>
            <Input type="checkbox" /> Drama 
            <br></br> 
            <Input type="checkbox" /> Fantasy 
            <br></br>
            <Input type="checkbox" /> Game 
            <br></br>
            <Input type="checkbox" /> Historical
            <br></br> 
            <Input type="checkbox" /> Horror
            <br></br>  
            <Input type="checkbox" /> Kids 
            <br></br>
            <Input type="checkbox" /> Magic 
            <br></br>
            <Input type="checkbox" /> Martial Arts 
            <br></br>
            <Input type="checkbox" /> Mecha 
            <br></br>
            <Input type="checkbox" /> Music 
            <br></br>
            <Input type="checkbox" /> Parody 
            <br></br>
            <Input type="checkbox" /> Samurai
            <br></br> 
            <Input type="checkbox" /> Romance  
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check> 
             <Input type="checkbox" /> School
            <br></br>
            <Input type="checkbox" /> Sci Fi
            <br></br> 
            <Input type="checkbox" /> Shoujo
            <br></br>
            <Input type="checkbox" /> Shounen
            <br></br>
            <Input type="checkbox" /> Space
            <br></br>
            <Input type="checkbox" /> Sports
            <br></br>
            <Input type="checkbox" /> Super Power
            <br></br>
            <Input type="checkbox" /> Vampire
            <br></br>
            <Input type="checkbox" /> Yaoi
            <br></br>
            <Input type="checkbox" /> Yuri 
            <br></br>
            <Input type="checkbox" /> Harem
            <br></br> 
            <Input type="checkbox" /> Slice of Life
            <br></br> 
            <Input type="checkbox" /> Supernatural
            <br></br>
            <Input type="checkbox" /> Military
            <br></br>
            <Input type="checkbox" /> Police
            <br></br>
            <Input type="checkbox" /> Psychological 
            <br></br>
            <Input type="checkbox" /> Thriller
            <br></br>
            <Input type="checkbox" /> Seinen
            <br></br>
            <Input type="checkbox" /> Josei 
          </Label>
        </FormGroup>
      </Form>
    );
  }
}

