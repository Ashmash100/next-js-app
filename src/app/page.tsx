import Image from 'next/image'
import React from 'react';
import { Button } from 'antd';

export default function Home() {
  return (
    <main className='h-screen w-full bg-gray-200 flex items-center justify-center'>
        <Button type="primary">Primary Button</Button>
    </main>
  )
}
