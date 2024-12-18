import React from 'react';
import { Card, CardContent, CardHeader } from 'components/ui/card';
import CadastroForm from 'components/Form/cadastroForm';

export default function cadastro() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <h1 className="text-2xl font-bold text-green-800">Cadastro</h1>
        </CardHeader>
        <CardContent>
          <CadastroForm />
        </CardContent>
      </Card>
    </div>
  );
}
