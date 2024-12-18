import * as z from 'zod';

export const cadastroFormSchema = z.object({
    nome: z.string().min(1, 'Nome é obrigatório'),
    email: z.string().email('Email inválido'),
    password: z.string()
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .max(20, 'A senha deve ter no máximo 20 caracteres')
        .regex(/[a-z]/, 'A senha deve conter pelo menos uma letra minúscula')
});