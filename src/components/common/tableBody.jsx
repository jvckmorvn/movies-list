import React, { Component } from "react";
import _ from "../../../node_modules/lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content;
    return _.get(item, column.path);
  };
  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;