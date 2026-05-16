const getPagination = (page = 1, limit = 10) => {
  const currentPage = parseInt(page, 10);

  const currentLimit = parseInt(limit, 10);

  const skip = (currentPage - 1) * currentLimit;

  return {
    page: currentPage,
    limit: currentLimit,
    skip,
  };
};

const paginationMeta = (
  totalRecords,
  page,
  limit
) => {
  return {
    totalRecords,

    currentPage: page,

    totalPages: Math.ceil(totalRecords / limit),

    hasNextPage:
      page < Math.ceil(totalRecords / limit),

    hasPreviousPage: page > 1,
  };
};

module.exports = {
  getPagination,
  paginationMeta,
};