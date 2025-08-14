import { z } from 'zod';

// Define the environment variables schema
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().min(1).max(65535).default(3000),
});

// Parse and validate environment variables
const env = envSchema.parse(process.env);

export { env };
