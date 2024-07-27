import React from 'react';
import ReactPaginate from 'react-paginate';
import "../Styles/Pagination.css"

const Pagination = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    pageCount={pageCount}
    onPageChange={onPageChange}
    previousLabel={'Previous'}
    nextLabel={'Next'}
    containerClassName={'pagination'}
    activeClassName={'active'}
  />
);

export default Pagination;