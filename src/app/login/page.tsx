'use client';

import { Logo } from 'assets';
import { useSession, signIn } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { Button } from 'components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from 'components/ui/card';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';

export default function Login() {
  const session = useSession();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  if (session.status === 'authenticated') {
    redirect('/');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      username: username,
      password: password
    });
  };

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
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">username</Label>
              <Input
                id="username"
                type="username"
                placeholder="jonh Doe"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <CardFooter>
              <Button type="submit" className="w-full">Entrar</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}