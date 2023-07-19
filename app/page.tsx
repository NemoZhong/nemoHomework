'use client';
import { ConfigProvider } from 'antd';
import BasicInfo from './containers/BasicInfo';
import DailyQuests from './containers/DailyQuests';
import Milestones from './containers/Milestones';

export default function Home() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#EDEDED',
        },
      }}
    >
      <main className="flex justify-center items-center text-textMainColor w-[100rem] h-[50.0625rem]">
        <BasicInfo />
        <div className="flex flex-col w-[67.6875rem] h-[35.0625rem]">
          <DailyQuests />
          <Milestones />
        </div>
      </main>
    </ConfigProvider>
  );
}
