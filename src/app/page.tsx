'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';

import { Logo } from '@/../assets';

export default function Home() {
  const session = useSession();

  if (session.status === 'unauthenticated') {
    redirect('/login');
  }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center bg-black">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-white text-xl">
          Feito com <strong>&lt; &#x0002F; &gt;</strong> e{' '}
          <strong>&hearts;</strong> by my
        </p>
      </div>
    </div>
  );
}
