import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) {
  return (
    <nav
      className={cn("flex justify-center space-x-2", className)}
      aria-label="Pagination"
    >
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <Link
            key={page}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(page);
            }}
            className={cn(
              buttonVariants({ variant: "outline" }),
              page === currentPage
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : ""
            )}
          >
            {page}
          </Link>
        );
      })}
    </nav>
  );
}
