// librarys
import React, { useEffect, useMemo, useState } from 'react';

// statics
import { ColorsList } from '../../types';
import { bg, className, dark, light } from './static';

// icons
import LeftIcon from '../../icons/leftIcon';
import DoubleLeftIcon from '../../icons/DoubleLeftIcon';
import DoubleRightIcon from '../../icons/DoubleRightIcon';
import RightIcon from '../../icons/Righticon';

interface Props {
  totalPages: number;
  onPageChange: (currentPage: number) => void,
  current: number,
  color: ColorsList,
  theme?: "dark" | "light"
}

const Pagination: React.FC<Props> = ({ totalPages, onPageChange, current, color, theme }) => {
  const [counterNext, setCounterNext] = useState<number>(1);

  const clas = `${className} ${theme === "dark" ? dark : light}`;
  const active = `${className} ${bg[color]} text-white`;

  const paginate = useMemo(
    () =>
      Array.from({ length: totalPages > 5 ? 5 : totalPages })
        .map((_, index) => index + counterNext <= totalPages)
        .filter(item => item),
    [counterNext, totalPages]
  )

  useEffect(() => setCounterNext(1), [totalPages])

  const handleCounter = (counter: number) => {
    setCounterNext(counter);
    onPageChange(counter)
  }

  const onPrevPage = () => {
    const page = current - 1;
    onPageChange(page);
    if (current === counterNext) {
      setCounterNext(counterNext - 5)
    }
  }

  const onNextPage = () => {
    const page = current + 1;
    onPageChange(page);
    if (current === counterNext + 4) {
      setCounterNext(counterNext + 5)
    }
  }

  return (
    <div className="flex">
      {
        totalPages > 1 &&
        <>
          <button
            type='button'
            className={clas}
            onClick={() => onPrevPage()}
            disabled={current === 1}
          >
            <LeftIcon className='w-4 h-4' />
          </button>

          {
            counterNext > 5 && totalPages > 5 &&
            <button
              type='button'
              className={clas}
              onClick={() => handleCounter(counterNext - 5)}
            >
              <DoubleLeftIcon className='w-4 h-4' />
            </button>
          }

          {
            paginate.map((_, index) =>
              <div
                key={index}
                className={(index + counterNext) === current ? active : clas}
                onClick={() => onPageChange(index + counterNext)}
              >
                {index + counterNext}
              </div>
            )
          }

          {
            counterNext + 5 < totalPages &&
            <button type='button' className={clas} onClick={() => handleCounter(counterNext + 5)}>
              <DoubleRightIcon className='w-4 h-4' />
            </button>
          }

          <button
            type='button'
            className={clas}
            onClick={() => onNextPage()}
            disabled={current === totalPages}
          >
            <RightIcon className='w-4 h-4' />
          </button>
        </>
      }
    </div>
  );
};

export default Pagination;
