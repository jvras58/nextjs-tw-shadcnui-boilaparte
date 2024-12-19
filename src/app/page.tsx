import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ThemeToggle } from 'components/theme-toggle'
import { getServerSession } from 'next-auth';

import { Logo } from '@/../assets';
import { LogoutButton } from 'components/button-auth/LogoutButton';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center">
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
      <ThemeToggle />
      <LogoutButton />
    </div>
    
  );
}
