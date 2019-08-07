import React from 'react';
import { Table } from 'reactstrap';

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
            <td>number</td>
            <td>rating</td>
            <td>word</td>
            <td>word</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>image</td>
            <td>number</td>
            <td>rating</td>
            <td>word</td>
            <td>word</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>image</td>
            <td>number</td>
            <td>rating</td>
            <td>word</td>
            <td>word</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}