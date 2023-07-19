'use client';
import React, { useMemo, useState } from 'react';
import ListItem from '@/app/components/ListItem';
import { Tabs } from 'antd';

type Props = {};

const data = [
  {
    id: '1',
    total: 6,
    reward: 10,
    fulfilled: 1,
    status: 'claimed',
  },
  {
    id: '2',
    total: 8,
    reward: 10,
    fulfilled: 4,
    status: 'start',
  },
  {
    id: '3',
    total: 10,
    reward: 10,
    fulfilled: 3,
    status: 'start',
  },
  {
    id: '4',
    total: 10,
    reward: 10,
    fulfilled: 3,
    status: 'start',
  },
  {
    id: '5',
    total: 10,
    reward: 10,
    fulfilled: 3,
    status: 'start',
  },
];
const Milestones = (props: Props) => {
  const [activeTab, setActiveTab] = useState('1');
  const tabItems = useMemo(() => {
    const content = (
      <div className="mb-[0.75rem] h-[12rem] overflow-auto ">
        {data.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </div>
    );
    const tabs = [
      {
        label: `Course Completion`,
        key: '1',
        children: content,
      },
      {
        label: `Quest Winning Streak`,
        key: '2',
        children: content,
      },
      {
        label: `Track Completion`,
        key: '3',
        children: content,
      },
    ];
    return tabs.map((item) => {
      return item.key === activeTab
        ? { ...item, label: `< ${item.label} />` }
        : item;
    });
  }, [data, activeTab]);

  return (
    <div
      className="card box-border px-[1.75rem] py-[2.5rem] h-[20.5rem]

    relative after:block after:absolute after:z-30 after:w-[63rem] after:bottom-[2rem] after:h-[2rem] after:bg-gradient-to-b from-[#dedede00] to-[#101010] 
    "
    >
      <div className="absolute top-[3rem] text-white font-fontBold">
        Milestones
      </div>
      <Tabs
        activeKey={activeTab}
        animated
        tabBarStyle={{ color: '#B2B2B2', marginLeft: 'auto' }}
        items={tabItems}
        onTabClick={(key) => setActiveTab(key)}
      />
    </div>
  );
};

export default Milestones;
