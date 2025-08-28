import { useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const currentItems = data.slice(start, end);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
  };
}
