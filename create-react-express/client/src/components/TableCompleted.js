import React from "react";
import { Table } from "reactstrap";
import FormScore from "../components/FormScore";

export default class Example extends React.Component {
  render() {
    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Name</th>
            <th>Score</th>
            <th>Type</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>image</td>
            <td>Lupin the 3rd</td>
            <td><FormScore/>/ 10</td>
            <td>tv</td>
            <td>complete</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>image</td>
            <td>Yu Yu Hakusho</td>
            <td><FormScore/>/ 10</td>
            <td>tv</td>
            <td>complete</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>image</td>
            <td>Cowboy Bepop</td>
            <td><FormScore/>/ 10</td>
            <td>tv</td>
            <td>complete</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}