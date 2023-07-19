import React from 'react';
import TaskUnit from '../../components/TaskUnit';

type Props = {};

const data = [
  { total: 10, fulfilled: 10, reward: 5 },
  { total: 20, fulfilled: 12, reward: 15 },
  { total: 25, fulfilled: 10, reward: 25 },
];

const DailyQuests = (props: Props) => {
  return (
    <div className="card flex justify-between items-center mb-[1rem] h-[13.8rem] box-border ">
      <div className="w-[11.8rem] h-full rounded-l-cardRadius bg-[#1C1C1C] overflow-hidden  relative after:block after:absolute after:z-10 after:inset-y-[8rem] after:-inset-x-[2rem] after:w-[10rem] after:h-[10rem] after:rounded-full  after:bg-[#232323] before:block before:absolute before:z-30 before:inset-x-[11.8rem] before:w-[11.8rem] before:h-[15rem] before:origin-top-left before:rotate-[20deg] before:bg-[#101010]">
        <div className="mt-[2.5rem] ml-[1.5rem] w-[4.625rem] break-words font-fontBold leading-[1rem]">
          Daily Quests
        </div>
      </div>
      <div className="flex my-[1.26rem]">
        {data.map(({ total, fulfilled, reward }, idx) => {
          return (
            <>
              <TaskUnit
                key={idx}
                total={total}
                fulfilled={fulfilled}
                reward={reward}
              />
              {idx !== data.length - 1 && (
                <div
                  className={`h-[1px] w-[6.56rem] ${
                    total === fulfilled ? 'bg-white' : 'bg-subTextColor'
                  } translate-y-[4.6rem]`}
                ></div>
              )}
            </>
          );
        })}
      </div>
      <div className="mx-[3rem] text-center text-[0.875rem]">
        <div className="w-[9rem] leading-[2.44rem] rounded-[0.75rem] text-black bg-[#353535] mb-[0.75rem]">
          Claim
        </div>
        <div className="w-[9rem] leading-[2.44rem] rounded-[0.75rem] text-[#EDEDED] bg-[#2E2E2E]">
          Start Learning
        </div>
      </div>
    </div>
  );
};

export default DailyQuests;
