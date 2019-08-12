import React from "react";
import { Table } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <Table responsive>
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
            <td>10/10</td>
            <td>tv</td>
            <td>complete(but on going)</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>image</td>
            <td>Yu Yu Hakusho</td>
            <td>8/10</td>
            <td>tv</td>
            <td>complete</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>image</td>
            <td>Cowboy Bepop</td>
            <td>9/10</td>
            <td>tv</td>
            <td>complete</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}