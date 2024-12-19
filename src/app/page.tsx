import Image from 'next/image';
import { redirect } from 'next/navigation';
import { ThemeToggle } from 'components/theme-toggle';
import { getServerSession } from 'next-auth';

import { Logo } from '@/../assets';
import { LogoutButton } from 'components/button-auth/LogoutButton';

export default async function Home() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center dark:bg-gray-900">
      <div>
        <Image src={Logo} alt="Logo"/>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-zinc-900 dark:text-white text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-zinc-900 dark:text-white text-xl">
          Feito com <strong>&lt; &#x0002F; &gt;</strong> e{' '}
          <strong>&hearts;</strong> by {session.user?.name}
        </p>
      </div>
      <ThemeToggle />
      <LogoutButton />
    </div>
  );
}