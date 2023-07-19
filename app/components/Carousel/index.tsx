import React, { useLayoutEffect, useState, useRef, useCallback } from 'react';

type Props = {};

const Carousel = (props: Props) => {
  const [data, setData] = useState([1, 2, 3]);

  const ref = useRef<any>(null);

  const save = () => {
    [...ref.current.children].forEach((item) => {
      const { left, top } = item.getBoundingClientRect();
      item.dataset.left = left;
      item.dataset.top = top;
    });
  };

  useLayoutEffect(() => {
    save();
  }, []);

  useLayoutEffect(() => {
    [...ref.current.children].forEach((item, idx) => {
      const { left: currentLeft, top: currentTop } =
        item.getBoundingClientRect();
      const { left: oldLeft, top: oldTop } = item.dataset;
      const invert = {
        left: oldLeft - currentLeft,
        top: oldTop - currentTop,
      };
      const keyframes = [
        {
          transform: `translate(${invert.left}px, ${invert.top}px) scale(1)`,
          backgroundColor: idx === 1 ? '#444' : '#D9D9D9',
        },
        {
          transform: `translate(0, 0) scale(${idx === 1 ? 1.2 : 1})`,
          backgroundColor: idx === 1 ? '#D9D9D9' : '#444',
        },
      ];

      const options = {
        duration: 300,
        easing: 'cubic-bezier(0,0,0.32,1)',
        fill: 'forwards',
      };
      item.animate(keyframes, options);
    });
  }, [data]);

  const change = useCallback((item: number) => {
    const newData = [
      item - 1 === 0 ? 3 : item - 1,
      item,
      item + 1 > 3 ? 1 : item + 1,
    ];
    setData(newData);
    save();
  }, []);

  return (
    <div className="flex justify-center" ref={ref}>
      {data.map((item, index) => {
        return index === 1 ? (
          <div
            key={item}
            className={`rounded-full w-[4.3125rem] h-[4.3125rem] bg-avatarColor z-20 mx-[-0.75rem]`}
          ></div>
        ) : (
          <div
            key={item}
            className={`rounded-full w-[4.3125rem] h-[4.3125rem] bg-notActiveColor`}
            onClick={() => change(item)}
          ></div>
        );
      })}
    </div>
  );
};

export default Carousel;
