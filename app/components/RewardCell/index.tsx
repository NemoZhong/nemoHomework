'use client';
import React from 'react';
import Image from 'next/image';

type Props = {
  reward: number;
};

const RewardCell = (props: Props) => {
  const { reward } = props;
  return (
    <div className="flex justify-center items-center">
      <Image
        className="mr-[0.25rem]"
        src={'/images/Sphere4.svg'}
        width={20}
        height={20}
        alt=""
      />
      <span className="font-fontBold">{reward}</span>
    </div>
  );
};

export default RewardCell;
