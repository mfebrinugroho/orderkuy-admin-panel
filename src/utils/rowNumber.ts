export const getRowNumber = (
  currentPage: number,
  perPage: number,
  index: number,
) => {
  return (currentPage - 1) * perPage + index + 1;
};
