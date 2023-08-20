import { Button } from 'antd';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';


export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className='h-screen w-full bg-gray-200 flex items-center justify-center'>
        <Button type="primary">Primary Button</Button>
        <p>{JSON.stringify(session)}</p>
    </main>
  )
}

