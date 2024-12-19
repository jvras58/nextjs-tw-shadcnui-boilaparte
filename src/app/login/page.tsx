

import { Logo } from 'assets';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from 'components/ui/card';
import LoginForm from 'components/Form/loginForm';

export default async function Login() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/');
    }

  return (
    <div className="flex flex-1 flex-col h-full justify-around items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <div>
            <Image src={Logo} alt="Logo" />
          </div>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Digite o seu username abaixo para fazer login em sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
