import React, { useState } from 'react';
import { PaginationArea } from 'style/StyleLayout';

function Pagination({ totalPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleMovePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleMoveNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const totalPages = totalPage;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage < 4) {
      for (let i = 1; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage >= totalPages - 2) {
      for (let i = totalPages - 4; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = currentPage - 2; i <= currentPage + 2; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((number) => (
      <li key={number}>
        <div
          className={currentPage === number ? 'activePage' : ''}
          onClick={() => handleClick(number)}
        >
          {number}
        </div>
      </li>
    ));
  };

  return (
    <PaginationArea>
      <ul>
        <li>
          <div
            onClick={() => setCurrentPage(1)}
            className={currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'}
          >
            &lt; &lt;
          </div>
        </li>
        <li>
          <div
            onClick={handleMovePrev}
            className={currentPage === 1 ? 'pagebtn disabled' : 'pagebtn'}
          >
            &lt;
          </div>
        </li>
        {renderPageNumbers()}
        <li>
          <div
            onClick={handleMoveNext}
            className={
              currentPage === totalPage ? 'pagebtn disabled' : 'pagebtn'
            }
          >
            &gt;
          </div>
        </li>
        <li>
          <div
            onClick={() => setCurrentPage(totalPage)}
            className={
              currentPage === totalPage ? 'pagebtn disabled' : 'pagebtn'
            }
          >
            &gt; &gt;
          </div>
        </li>
      </ul>
    </PaginationArea>
  );
}

export default Pagination;
