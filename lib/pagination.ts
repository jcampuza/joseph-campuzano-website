import { z } from 'zod';

export const PaginationSchema = z.object({
  sort: z.enum(['asc', 'desc']).optional(),
});

export type IPagination = z.infer<typeof PaginationSchema>;
