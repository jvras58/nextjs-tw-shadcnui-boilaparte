'use client';

import React from 'react';
import { Button } from 'components/ui/button';
import {
  Form,
  FormControl,
  // FormDescription,
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
import formSchema from 'validations/BasicSchema';

export default function LandingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: ''
    }
  });

  const handleForm = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Card className="w-1/2 ">
      <CardHeader>My Page</CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleForm)} className="space-y-8">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Antônio da Silva" {...field} /> 
                    </FormControl>
                    {/* <FormDescription>Enter your username</FormDescription> */}
                    <FormMessage /> 
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
