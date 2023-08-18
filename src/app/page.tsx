"use client"
import { Button } from 'antd';
import log from './actions';
export default function Home() {

  return (
    <main className='h-screen w-full bg-gray-200 flex items-center justify-center'>
        <Button onClick={() => log()} type="primary">Primary Button</Button>
    </main>
  )
}
