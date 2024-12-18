'use client';

import React from 'react';
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
          // Lógica adicional após o sucesso, como redirecionamento ou exibição de mensagem
      } catch (error) {
          console.error('Erro ao enviar o formulário:', error);
          // Lógica de tratamento de erro, como exibir uma mensagem ao usuário
      }
  };

  return (
    <Card className="w-1/2">
      <CardHeader>Cadastro</CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)} className="space-y-8">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome:</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do Usuario" {...field} />
                    </FormControl>
                    <FormDescription>Digite seu nome de usuário</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email:</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormDescription>Digite seu email</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Senha:</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Senha" {...field} />
                    </FormControl>
                    <FormDescription>Digite uma senha segura</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Criar</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}