'use client';

import React from 'react';
import { redirect } from 'next/navigation';
import { Button } from 'components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'components/ui/form';
import { Input } from 'components/ui/input';
import { Card, CardContent, CardHeader } from 'components/ui/card';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { cadastroFormSchema }  from 'actions/cadastro/schema';
import { saveCadastroForm } from 'actions/cadastro/save';

export default function LandingPage() {
  const form = useForm<z.infer<typeof cadastroFormSchema >>({
    resolver: zodResolver(cadastroFormSchema ),
    defaultValues: {
      nome: '',
      email: '',
      password: '',
    }
  });

    const handleForm = async (data: z.infer<typeof cadastroFormSchema>) => {
      try {
          const result = await saveCadastroForm(data);
          console.log('Cadastro realizado com sucesso:', result);
          redirect("/login");
      } catch (error) {
          console.error('Erro ao enviar o formulário:', error);
          // Lógica de tratamento de erro, como exibir uma mensagem ao usuário
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold text-green-800">Cadastro</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleForm)} className="space-y-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-700">Nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do Usuário" {...field} className="border-green-300 focus:border-green-500" />
                    </FormControl>
                    <FormDescription className="text-green-600">Digite seu nome de usuário</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-700">Email:</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} className="border-green-300 focus:border-green-500" />
                    </FormControl>
                    <FormDescription className="text-green-600">Digite seu email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-green-700">Senha:</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Senha" {...field} className="border-green-300 focus:border-green-500" />
                    </FormControl>
                    <FormDescription className="text-green-600">Digite uma senha segura</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                Criar Conta
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}