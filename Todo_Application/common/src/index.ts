import z from 'zod'

export let inputTodo = z.object({
    title: z.string().min(1).max(10),
    description: z.string().min(1).max(50),
  });
  
export type InputTodoZodInfer = z.infer<typeof inputTodo>
  