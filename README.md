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
- 🐛 **Error Handling** - Uncaught exception and rejection handling

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
3. **Error Handling** - Catches unhandled exceptions and rejections
4. **Type Safety** - Strict TypeScript configuration
5. **Code Quality** - ESLint for code quality, Prettier for formatting
6. **Environment Validation** - Zod schema validation for environment variables
7. **Health Check** - `/health` endpoint for monitoring

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## License

MIT