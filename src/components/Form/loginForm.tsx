'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Input } from 'components/ui/input';
import { Label } from 'components/ui/label';
import { Button } from 'components/ui/button';

export interface LoginFormProps {}

const LoginForm = ({}: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', {
      redirect: false,
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="example@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">
        Entrar
      </Button>
    </form>
  );
};

export default LoginForm;