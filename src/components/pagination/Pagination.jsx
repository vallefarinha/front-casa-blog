import React from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);


  const handlePageClick = (selectedPage) => {
    onPageChange(selectedPage.selected);
  };

  return (
<div className="flex justify-center mt-5 mb-5">
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="<"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageClassName=" hover:bg-gray-300 p-2 rounded cursor-pointer font-poppinsRegular text-LetterColor"
    activeClassName="bg-primaryColor text-white"
    previousClassName="bg-gray-300 hover:bg-primaryColor hover:text-white p-2 rounded-full cursor-pointer mr-2 font-poppinsRegular text-LetterColor"
    nextClassName="bg-gray-300 hover:bg-primaryColor hover:text-white p-2 rounded-full cursor-pointer ml-2 font-poppinsRegular text-LetterColor"
    className="flex"
  />
</div>
  );
}

export default Pagination;