import React, {
  useEffect,
  useLayoutEffect,
  useState,
  useRef,
  useCallback,
} from 'react';

type Props = {};

const Carousel = (props: Props) => {
  const [active, setActive] = useState(1);
  const [data, setData] = useState([1, 2, 3]);

  const ref = useRef<any>(null);

  const first = () => {
    [...ref.current.children].forEach((item) => {
      const { left, top } = item.getBoundingClientRect();
      item.dataset.left = left;
      item.dataset.top = top;
    });
  };

  useLayoutEffect(() => {
    first();
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
        },
        { transform: `translate(0, 0) scale(${active === idx ? 1.2 : 1})` },
      ];

      const options = {
        duration: 300,
        easing: 'cubic-bezier(0,0,0.32,1)',
        fill: 'forwards',
      };

      item.animate(keyframes, options);
    });
  }, [data, active]);

  const change = useCallback((item: number) => {
    const newData = [
      item - 1 === 0 ? 3 : item - 1,
      item,
      item + 1 > 3 ? 1 : item + 1,
    ];
    setActive(active);
    setData(newData);
    first();
  }, []);

  return (
    <div className="flex justify-center" ref={ref}>
      {data.map((item, index) => {
        return active === index ? (
          <div
            key={item}
            className={`rounded-full w-[3rem] h-[3rem] bg-avatarColor z-20 mr-[-0.5rem]`}
            onClick={() => change(item)}
          ></div>
        ) : (
          <div
            key={item}
            className={`rounded-full w-[3rem] h-[3rem] bg-notActiveColor mr-[-0.5rem]`}
            onClick={() => change(item)}
          ></div>
        );
      })}
    </div>
  );
};

export default Carousel;
