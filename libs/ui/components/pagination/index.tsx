import clsx from 'clsx';
import type { ReactNode } from 'react';
import ReactPaginate from 'react-paginate';
import { RenderIcon } from '../icons';

type PaginationProps = {
  limit: number;
  page: number;
  pageCount?: number;
  total: number;
  className?: string;
  customClasses?: {
    root?: string;
    container?: string;
    page?: string;
    active?: string;
    next?: string;
    previous?: string;
  };
  onChangePage: (value: number) => void;
};

export const Pagination = ({
  limit,
  pageCount,
  className,
  page,
  total,
  customClasses,
  onChangePage,
}: PaginationProps): ReactNode => {
  return (
    <div className={clsx('flex items-center gap-2 justify-between w-full', customClasses?.root)}>
      <div className="flex items-center text-sm gap-[5px]">
        Showing <span className="font-semibold">{limit * (page - 1)}</span> to{' '}
        <span className="font-semibold">{total < limit * page ? total : limit * page}</span> of{' '}
        <span className="font-semibold">{total}</span> results
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={renderPageFL(true, page === pageCount)}
        previousLabel={renderPageFL(false, page === 1)}
        pageLabelBuilder={(p: number) => renderPage(p)}
        pageCount={pageCount || Math.ceil(total / limit)}
        forcePage={page - 1}
        onPageChange={(event: { selected: number }) => {
          if (event.selected === undefined) return;
          onChangePage(event.selected + 1);
        }}
        pageRangeDisplayed={5}
        renderOnZeroPageCount={null}
        className={clsx(className, customClasses?.container)}
        containerClassName={clsx(customClasses?.container, 'flex items-center gap-2')}
        pageClassName={clsx(
          customClasses?.page,
          'h-7 min-w-7 w-fit text-14 transition-all ease-linear flex items-center justify-center border border-solid border-neutral rounded-md hover:bg-primary-background hover:border-primary-hover cursor-pointer',
        )}
        activeClassName={clsx(
          customClasses?.active,
          'bg-primary-hover rounded-md text-neutral-white border-primary-hover hover:text-neutral-black',
        )}
        previousClassName={clsx(
          customClasses?.previous,
          'rounded-md border-neutral hover:bg-primary-background hover:border-primary-hover border border-solid',
          { '!cursor-not-allowed bg-neutral hover:!bg-neutral hover:!border-neutral': page === 1 },
        )}
        nextClassName={clsx(
          customClasses?.next,
          'rounded-md border-neutral hover:bg-primary-background hover:border-primary-hover border border-solid',
          {
            'cursor-not-allowed bg-neutral hover:!bg-neutral hover:!border-neutral':
              page === pageCount,
          },
        )}
      />
    </div>
  );
};

const renderPageFL = (isNext = true, disabled = false): ReactNode => (
  <div
    className={clsx('flex text-sm py-2 items-center justify-center h-7 min-w-7 aspect-square', {
      'cursor-not-allowed': disabled,
    })}
  >
    <RenderIcon
      strokeWidth={2}
      name={isNext ? 'chevron-double-right' : 'chevron-double-left'}
      className="!w-3 !h-3"
    />
  </div>
);

const renderPage = (page: number): ReactNode => (
  <span className="block w-full h-full p-2">{page}</span>
);
