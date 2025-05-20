import type { MouseEvent } from "react";
import { useSearchParams } from "react-router";
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as ShadcnPagination,
} from "./ui/pagination";

interface PaginationProps {
  totalPage: number;
}

export const Pagination = ({ totalPage }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  if (isNaN(page) || page < 1 || page > totalPage) {
    return null;
  }

  const navigate = (page: number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  const handleClickLink = (e: MouseEvent<HTMLAnchorElement>, page: number) => {
    e.preventDefault();
    navigate(page);
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        {page > 1 && (
          <>
            <PaginationItem>
              <PaginationPrevious
                to={`?page=${page - 1}`}
                onClick={(e) => handleClickLink(e, page - 1)}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                to={`?page=${page - 1}`}
                onClick={(e) => handleClickLink(e, page - 1)}
              >
                {page - 1}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
        <PaginationItem>
          <PaginationLink
            to={`?page=${page}`}
            onClick={(e) => handleClickLink(e, page)}
            isActive
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {page < totalPage && (
          <>
            <PaginationItem>
              <PaginationLink
                to={`?page=${page + 1}`}
                onClick={(e) => handleClickLink(e, page + 1)}
              >
                {page + 1}
              </PaginationLink>
            </PaginationItem>
            {page + 1 !== totalPage && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                to={`?page=${page + 1}`}
                onClick={(e) => handleClickLink(e, page + 1)}
              />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </ShadcnPagination>
  );
};
