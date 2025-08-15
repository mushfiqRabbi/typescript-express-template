# Using this Template

To use this template for a new project:

1. Click the "Use this template" button on GitHub
2. Choose a name for your repository
3. Select if it should be Public or Private
4. Click "Create repository from template"

After creating your repository, clone it and run the setup script:

```bash
./setup.sh
```

Or manually install dependencies:

```bash
npm install
```

## Environment Variables

This template includes a `.env.example` file with default configuration values. 
To set up your environment:

1. Copy the example file:
   ```bash
   cp .env.example .env
   ```

2. Modify the `.env` file with your desired values.

## Starting the Application

Start the development server:
```bash
npm run dev
```

For production builds:
```bash
npm run build && npm start
```