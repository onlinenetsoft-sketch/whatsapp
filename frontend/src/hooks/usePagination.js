import { useState } from 'react';

function usePagination(initialPage = 1) {
  const [page, setPage] =
    useState(initialPage);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return {
    page,
    setPage,
    nextPage,
    previousPage,
  };
}

export default usePagination;