
import { usePagination } from '../hooks/usePagination';
import { ArrowIcon, PContainer, PItem } from '../styles/components/pagination';

interface PaginationProps {
  onPageChange: (currentPage: number) => number | void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize
}: PaginationProps): JSX.Element | null {

  const paginationRange: { pages: number[]; totalPages?: number | undefined; } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.pages.length < 2) {
    return null;
  }

  function onNext() {
    onPageChange(currentPage + 1);
  };

  function onPrevious() {
    onPageChange(currentPage - 1);
  };

  const lastPage = Number(paginationRange.totalPages) || Number(paginationRange.pages.length);

  return (
    <PContainer>
      <PItem
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <ArrowIcon type={'left'} />
      </PItem>

      {paginationRange.pages.map((pageNumber: number) => {
        return (
          <PItem
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PItem>
        );
      })}

      <PItem
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <ArrowIcon type={'right'} />
      </PItem>

      {lastPage - siblingCount > currentPage && paginationRange.totalPages && (
        <PItem
          selected={paginationRange.totalPages === currentPage}
          onClick={() => onPageChange(paginationRange.totalPages || 0)}
        >
          {paginationRange.totalPages}
        </PItem>
      )}
    </PContainer>
  );
};
