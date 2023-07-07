import { useSelector } from "react-redux";
import React, { useState } from "react";
import "./Paginator.css";
import ReactPaginate from "react-paginate";

function Paginator() {
  const postprovider = useSelector((state) => state.postprovider);
  const [users, setUsers] = useState(postprovider.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
console.log(users)
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="Paginator">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default Paginator;
