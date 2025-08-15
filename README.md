# TypeScript Express Template

A production-ready TypeScript Express.js boilerplate with ESLint, Prettier, and best practices.

## Features

- 🔧 **TypeScript** - Strongly typed JavaScript
- 🚀 **Express.js** - Fast, unopinionated web framework
- 📏 **ESLint** - Code quality enforcement
- 🎨 **Prettier** - Code formatting
- 🛡️ **Zod** - Environment validation
- 🔄 **Nodemon** - Automatic restarts during development
- ⚡ **TS-Node** - TypeScript execution runtime
- 🧪 **Strict TypeScript** - Enhanced type checking
- 📦 **Separation of Concerns** - App, server, and config separation
- 🛑 **Graceful Shutdown** - Proper process termination handling
- 🐛 **Global Error Handler** - Comprehensive error handling middleware
- 📋 **Custom Error Types** - Predefined HTTP exception classes
- 🔄 **Async Handler Wrapper** - Eliminates try/catch boilerplate in controllers

## Quick Start

1. **Create a new repository from this template** (click "Use this template" on GitHub)
2. **Clone your new repository**:
   ```bash
   git clone your-repo-url
   cd your-repo-name
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start development server**:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Run development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled production server
- `npm run lint` - Check for code quality issues
- `npm run lint:fix` - Automatically fix code quality issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm run update:check` - Check for outdated dependencies
- `npm run update:deps` - Update dependencies to latest compatible versions
- `npm run update:latest` - Update dependencies to latest versions (may include breaking changes)

## Project Structure

```
src/
├── config/          # Configuration files
│   └── env.ts       # Environment validation
├── middlewares/     # Express middlewares
│   ├── asyncHandler.ts  # Async route handler wrapper
│   ├── errorHandler.ts  # Global error handling middleware
│   └── errorTypes.ts    # Custom error classes
├── app.ts           # Express application setup
├── server.ts        # Server startup and shutdown
└── index.ts         # Entry point
```

## Keeping Dependencies Updated

This template uses semantic versioning (^) for dependencies, so you'll get compatible updates automatically. However, for major updates:

1. **Check for outdated packages**:
   ```bash
   npm run update:check
   ```

2. **Update to latest compatible versions**:
   ```bash
   npm run update:deps
   ```

3. **Update to latest versions (including breaking changes)**:
   ```bash
   npm run update:latest
   ```

After updating, run tests to ensure everything works correctly.

## Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=3000
```

## Best Practices Implemented

1. **Separation of Concerns** - App configuration separated from server logic
2. **Graceful Shutdown** - Proper handling of process termination signals
3. **Global Error Handling** - Comprehensive error handling with custom error types
4. **Async Handler Wrapper** - Eliminates try/catch boilerplate in controllers
5. **Type Safety** - Strict TypeScript configuration
6. **Code Quality** - ESLint for code quality, Prettier for formatting
7. **Environment Validation** - Zod schema validation for environment variables
8. **Health Check** - `/health` endpoint for monitoring

## Global Error Handler

This template includes a global error handling middleware that:

- Catches all unhandled errors in the application
- Provides consistent error response format
- Includes timestamp, path, and status code in error responses
- Shows stack traces in development environment
- Logs errors to the console with detailed information
- Supports custom HTTP error types (400, 401, 403, 404, 500)

### Usage

Simply throw any of the custom error types in your routes or middleware:

```typescript
import { NotFoundException, BadRequestException } from './middlewares/errorTypes';

app.get('/users/:id', (req, res) => {
  const user = findUser(req.params.id);
  if (!user) {
    throw new NotFoundException('User not found');
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  if (!req.body.name) {
    throw new BadRequestException('Name is required');
  }
  // Create user logic
});
```

The global error handler will automatically catch these errors and format them appropriately.

## Async Handler Wrapper

The async handler wrapper eliminates the need for try/catch blocks in async route handlers:

### Without asyncHandler (traditional approach):
```typescript
app.get('/users', async (req, res, next) => {
  try {
    const users = await getUsersFromDatabase();
    res.json(users);
  } catch (error) {
    next(error); // Pass error to global error handler
  }
});
```

### With asyncHandler (simplified approach):
```typescript
import { asyncHandler } from './middlewares/asyncHandler';

app.get('/users', asyncHandler(async (req, res) => {
  const users = await getUsersFromDatabase();
  res.json(users);
}));
```

Any errors thrown in the async handler will be automatically caught and passed to the global error handler.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT