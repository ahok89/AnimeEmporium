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
            <td>One Piece</td>
            <td> <FormScore/>/ 10</td>
            <td>tv</td>
            <td>up to date</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>image</td>
            <td>My Hero Academia</td>
            <td><FormScore/>/ 10</td>
            <td>tv</td>
            <td>up to date</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>image</td>
            <td>Boruto</td>
            <td><FormScore/>/ 10</td>
            <td>tv</td>
            <td>up to date</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}