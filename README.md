# Post Writer

Post Writer is a modern blogging platform built with Next.js. It combines a user-friendly interface with powerful features to provide the ideal writing environment for bloggers.

## Key Features

- User authentication (register, login)
- Create, edit, delete posts
- Markdown-enabled rich text editor
- Commenting feature
- Responsive design
- Dark mode support

## Tech Stack

- Next.js
- React
- TypeScript
- Prisma (ORM)
- PostgreSQL
- Tailwind CSS
- Shadcn/ui
- NextAuth.js

## Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/post-writer.git
cd post-writer
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables. Copy the `.env.example` file to `.env` and fill in the required values.

4. Set up the database:

```bash
npx prisma migrate dev
```

5. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Project Structure

- `app/`: Page components using Next.js App Router
- `components/`: Reusable React components
- `lib/`: Utility functions and helpers
- `prisma/`: Prisma schema and migrations
- `public/`: Static assets
- `styles/`: Global styles

Main components and pages:

- Main Page:
```typescript:app/(marketing)/page.tsx
startLine: 12
endLine: 235
```

- Blog Page:
```typescript:app/(marketing)/blog/page.tsx
startLine: 12
endLine: 65
```

- Post Editor:
```typescript:components/editor.tsx
startLine: 24
endLine: 167
```

## Deployment

This app can be easily deployed to Vercel. Simply import your GitHub repository to Vercel and set up environment variables.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome in any form, including bug reports, feature requests, and pull requests. It's recommended to open an issue to discuss any major changes before implementing them.

## Support

If you have any questions or need support, please open an issue on GitHub or email [support@postwriter.com](mailto:support@postwriter.com).