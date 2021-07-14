import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Sort{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value="LATEST">Latest</option>
            <option value="LOWEST">Lowest</option>
            <option value="HIGHEST">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Size{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="ALL">ALL</option>
            <option value="10oz">10oz</option>
            <option value="12oz">12oz</option>
            <option value="14oz">14oz</option>
            <option value="16oz">16oz</option>
            <option value="18oz">18oz</option>
            <option value="20oz">20oz</option>
          </select>
        </div>
      </div>
    );
  }
}
