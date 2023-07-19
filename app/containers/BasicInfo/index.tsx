'use client';
import React from 'react';
import Carousel from '../../components/Carousel';

type Props = {};

const BasicInfo = (props: Props) => {
  return (
    <div className="flex flex-col box-border px-[4.38rem] py-[2.3rem] card w-[21.5625rem] h-[35.0625rem] mr-[0.75rem] disabledTextColor">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-[6.375rem] h-[6.375rem] bg-avatarColor mb-[1.25rem]"></div>
        <div className="font-fontBold text-[1.25rem] mb-[0.75rem]">
          Carina Geng
        </div>
        <div className="flex items-center mb-[3.5rem]">
          <div className="rounded-full w-[1.25rem] h-[1.25rem] bg-avatarColor mr-[0.5rem]"></div>
          <div className="text-[0.8125rem] mr-[1.25rem]">Level 3</div>
          <div className="rounded-full w-[1.25rem] h-[1.25rem] border-2 text-center border-solid	border-subTextColor font-fontBold text-[0.72188rem] text-subTextColor">
            ?
          </div>
        </div>
        <div className="flex justify-between items-center text-center mb-[3.5rem]">
          <div>
            <div className="text-subTextColor text-[0.75rem]">Today’s XP</div>
            <div className="font-fontBold">50</div>
          </div>
          <div className="text-subTextColor scale-y-[2.6] mx-[2rem] font-thin">
            /
          </div>
          <div>
            <div className="text-subTextColor text-[0.75rem]">Total XP</div>
            <div className="font-fontBold">750/800</div>
          </div>
        </div>
      </div>
      <div>
        <Carousel />
        <div className="mt-[1.5rem] text-[0.875rem] mx-auto rounded-[0.75rem] cursor-pointer bg-gradient-to-b from-[#353535] to-[ #2E2E2E] leading-[2rem] text-center w-[9.0625rem] h-[2.5rem]">
          View all badges
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
