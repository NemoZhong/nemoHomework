'use client';
import React from 'react';
import RewardCell from '../RewardCell';
import { Progress } from 'antd';

type Props = {
  total: number;
  fulfilled: number;
  reward: number;
  status: string;
};

const ListItem = (props: Props) => {
  const { total, fulfilled, reward, status } = props;
  return (
    //
    <div className="flex items-center bg-[#202020] box-border  justify-between card text-white mb-[0.75rem]">
      <div className="w-[12rem] h-[3.3rem] shrink-0 overflow-hidden rounded-l-[1rem] relative after:block after:absolute after:z-30 after:-inset-y-[5rem] after:-inset-x-[2rem] after:w-[10rem] after:h-[10rem] after:rounded-full  after:bg-[#202020] before:block before:absolute before:z-10 before:inset-x-[8rem] before:-inset-y-[2rem] before:w-[4rem] before:h-[6rem] before:origin-top-left before:rotate-[20deg] before:bg-[#232323]"></div>
      <div>Complete {fulfilled} Syntax</div>
      <RewardCell reward={reward} />
      <Progress
        className="w-[17.2rem]"
        percent={30}
        strokeColor="#F2F2F2"
        trailColor="#505050"
        format={() => (
          <div className="text-[#F2F2F2] text-[0.875rem]">
            {fulfilled}/{total}
          </div>
        )}
      />
      <div className="w-[10rem] flex justify-end m-[0.38rem]">
        {status === 'claimed' ? (
          <div className="bg-white text-[#030303] cursor-pointer w-[5.5625rem] leading-[2.5rem] text-center rounded-[0.75rem]">
            Claim
          </div>
        ) : (
          <div className="bg-[#353535] text-[#EDEDED] cursor-pointer w-[8.9375rem] leading-[2.5rem] text-center rounded-[0.75rem]">
            Start Learning
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
