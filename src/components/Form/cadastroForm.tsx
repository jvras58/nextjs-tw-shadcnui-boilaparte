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

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { cadastroFormSchema }  from 'actions/cadastro/schema';
import { saveCadastroForm } from 'actions/cadastro/save';
import { useRouter } from 'next/navigation';

export interface CadastroFormProps {}

const CadastroForm = ({}: CadastroFormProps) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof cadastroFormSchema>>({
    resolver: zodResolver(cadastroFormSchema),
    defaultValues: {
      nome: '',
      email: '',
      password: '',
    },
  });

    const handleForm = async (data: z.infer<typeof cadastroFormSchema>) => {
      try {
          const result = await saveCadastroForm(data);
          console.log('Cadastro realizado com sucesso:', result);
          router.push('/login'); 
      } catch (error) {
          console.error('Erro ao enviar o formulário:', error);
          // Lógica de tratamento de erro, como exibir uma mensagem ao usuário
      }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleForm)} className="space-y-6">
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-green-700">Nome:</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome do Usuário"
                  {...field}
                  className="border-green-300 focus:border-green-500"
                />
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
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="border-green-300 focus:border-green-500"
                />
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
                <Input
                  type="password"
                  placeholder="Senha"
                  {...field}
                  className="border-green-300 focus:border-green-500"
                />
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
  );
};


export default CadastroForm;