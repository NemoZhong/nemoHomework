'use client'
import React, {
    useMemo
  } from 'react';
  import { Progress } from 'antd';
  import RewardCell from '../RewardCell';

  type Props = {
    total:number,
    fulfilled:number
    reward:number
  };

  
  const TaskUnit = (props: Props) => {
    const {total,fulfilled,reward}=props
    const percent=useMemo(()=>fulfilled/total*100,[total,fulfilled])
    
const content=useMemo(()=>{
    if(percent>=100){
        return <div className="flex flex-col  justify-center rounded-full m-[10px] w-[120px] h-[120px] bg-[url('/img/hero-pattern.svg')] ">

            <div className=''>claimed</div>
        </div>
    }else if(percent>50&&percent<100){
        return <div className='flex flex-col  justify-center  rounded-full m-[10px] w-[120px] h-[120px] bg-white text-[#000] text-center text-[1rem]'>
            <div>
            <div>Complete </div>
            <div className='mb-[1rem]'>{total} Quest</div>
            <div>{fulfilled}/ {total}</div>
            </div>
        </div>

    }else{
        return <div className='flex flex-col  justify-center rounded-full m-[10px] w-[120px] h-[120px] bg-black text-[#fff] text-center text-[1rem]'>
                 <div>Complete </div>
            <div className='mb-[1rem]'>{total} Quest</div>
            <div >{fulfilled}/ {total}</div>
        </div>

    }
}
,[percent,total,fulfilled])
  
    return (
        <div>
        <Progress type="circle" percent={percent} strokeColor="#fff" size={140} trailColor="#444"  strokeWidth={1} format={() => content} />
        <div className=' w-[140px]  mt-[1rem]'>
            <RewardCell reward={reward}/>
             </div>
        </div>

    );
  };
  
  export default TaskUnit;
  