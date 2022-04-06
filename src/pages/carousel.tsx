import React, { useEffect, useState } from 'react';

import { useSwipeable } from 'react-swipeable';

export const CarouselItem = ({
  children,
  width,
}: {
  children: any;
  width: any;
}) => {
  return (
    <div className="carousel-item" style={{ width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }: { children: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex: React.SetStateAction<number>) => {
    if (newIndex < 0) {
      // eslint-disable-next-line no-param-reassign
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      // eslint-disable-next-line no-param-reassign
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  // Hooks
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, _index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
      <div className="indicators">
        {/* Previous button */}
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          type="button"
          className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg
              className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>

        {/* Numbered indicators function */}
        {React.Children.map(children, (_child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
        {/* Next Button */}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          type="button"
          className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10">
            <svg
              className="h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
