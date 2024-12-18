"use server";
    
import { prisma } from "lib/prisma";
import { cadastroFormSchema } from "./schema";
import { z } from "zod";


export const saveCadastroForm = async (data: z.infer<typeof cadastroFormSchema>) => {
    try {
        const validatedData = await cadastroFormSchema.parseAsync(data);
        const result = await prisma.user.create({
            data: validatedData,
        });
        return result;
    } catch (err) {
        console.error('Erro ao salvar o formulário de cadastrk:', err);
        throw err;
    }
};