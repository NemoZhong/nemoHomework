'use client'
import React from 'react';
import ListItem from '@/app/components/ListItem';
import {  Tabs } from 'antd';

type Props = {};


const data=[{
  id:'1',
  total:6,
  reward:10,
  fulfilled:1,
  status:'claimed'
},{
  id:'2',
  total:8,
  reward:10,
  fulfilled:4,
  status:'start'
},{
  id:'3',
  total:10,
  reward:10,
  fulfilled:3,
  status:'start'
}]
const Milestones = (props: Props) => {

  const tabItems=[{
    label: `Tab 1`,
    key: 'id',
    children: <div>
        {
      data.map((item)=>(<ListItem key={item.id} {...item}/>))
    }
    </div>,
  },{
    label: `Tab 2`,
    key: 'id2',
    children: <div>
    {
  data.map((item)=>(<ListItem key={item.id} {...item}/>))
}
</div>,
  }]

  return <div className="card">
      <Tabs tabBarExtraContent={{left:<div className='mr-[40rem]'>'title'</div>}} items={tabItems} />

  
  </div>;
};

export default Milestones;
