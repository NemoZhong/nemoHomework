'use client';
import React, { useMemo } from 'react';
import { Progress } from 'antd';
import RewardCell from '../RewardCell';

type Props = {
  total: number;
  fulfilled: number;
  reward: number;
};

const TaskUnit = (props: Props) => {
  const { total, fulfilled, reward } = props;
  const percent = useMemo(() => (fulfilled / total) * 100, [total, fulfilled]);

  const content = useMemo(() => {
    if (percent >= 100) {
      return (
        <div className="flex flex-col justify-center items-center rounded-full m-[10px] w-[7.69rem] h-[7.69rem] relative after:block after:absolute after:w-full after:h-full after:bg-[url('/images/claimed-bg.svg')] after:bg-no-repeat after:bg-bottom after:opacity-[0.5] bg-black border-[0.5px] border-[#5C5C5C]">
          <div className="w-[4.9375rem] h-[2.5rem] rounded-[0.75rem] border-[1px] border-disabledTextColor text-center text-disabledTextColor text-[0.875rem] leading-[2.5rem]">
            Claimed
          </div>
        </div>
      );
    } else if (percent > 50 && percent < 100) {
      return (
        <div className="flex flex-col  justify-center  rounded-full m-[10px] w-[7.69rem] h-[7.69rem] bg-white text-[#000] text-center text-[0.875rem]">
          <div>
            <div className=" leading-[0.9625rem] text-[#030303]">Complete </div>
            <div className="mb-[1rem] leading-[0.9625rem]  text-[#030303]">
              {total} Quest
            </div>
            <div className="text-[0.75rem]">
              {fulfilled}/{total}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col  justify-center rounded-full m-[10px] w-[7.69rem] h-[7.69rem] bg-black text-[#fff] text-center text-[0.875rem]">
          <div className="leading-[0.9625rem]">Complete </div>
          <div className="mb-[1rem] leading-[0.9625rem]">{total}Quest</div>
          <div className="text-[0.75rem]">
            {fulfilled}/{total}
          </div>
        </div>
      );
    }
  }, [percent, total, fulfilled]);

  return (
    <div>
      <Progress
        type="circle"
        percent={percent}
        strokeColor="#fff"
        size={144}
        trailColor="#444"
        strokeWidth={1}
        format={() => content}
      />
      <div className=" w-[144px]  mt-[1rem]">
        <RewardCell reward={reward} />
      </div>
    </div>
  );
};

export default TaskUnit;
