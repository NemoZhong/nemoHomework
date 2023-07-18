import React from 'react';
import TaskUnit from '../../components/TaskUnit'

type Props = {};

const data=[{total:10,fulfilled:10,reward:5},{total:20,fulfilled:12,reward:15},{total:25,fulfilled:10,reward:25},]

const DailyQuests = (props: Props) => {
  return (
    <div className="card flex h-[100px] mb-[1rem] h-[12rem]">
      {
        data.map(({total,fulfilled,reward},idx)=>{
          return (
            <>
          <TaskUnit key={idx} total={total} fulfilled={fulfilled} reward={reward}/>
          {idx!==data.length-1&&<div className={`h-[1px] w-[120px] ${total===fulfilled?'bg-white':'bg-subTextColor'} translate-y-[4.6rem]`}></div>}

          </>
          )
        })
      }
      
    </div>
  );
};

export default DailyQuests;
