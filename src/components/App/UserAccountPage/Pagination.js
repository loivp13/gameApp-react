import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

export default class Example extends React.Component {
  render() {
    let renderPages = () => {
      return this.props.pages.map((page, index) => {
        return (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => {
                this.props.handlePageClick(index);
              }}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        );
      });
    };
    return (
      <Pagination aria-label="Page navigation example">
        {renderPages()}
      </Pagination>
    );
  }
}
