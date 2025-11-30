# Dynamic Form Builder

A modern, responsive frontend application built with Next.js that dynamically renders forms based on a JSON schema and manages submissions.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS, shadcn/ui
- **State Management:** TanStack Query, TanStack Form, TanStack Table
- **Icons:** Lucide React

## ✨ Features

- **Dynamic Form Rendering:** Renders forms based on a backend-provided JSON schema.
- **Field Types:** Supports Text, Number, Select, Multi-Select, Date, Textarea, and Switch.
- **Validation:** Client-side validation using Zod (inferred from schema).
- **Submissions Management:** Paginated and sortable table view of form submissions.
- **Detailed View:** Modal to view full submission details.

## 🛠️ Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure Environment:**
   Create a `.env` file in the root directory (optional, defaults to localhost):

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open the app:**
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build

To create a production build:

```bash
npm run build
npm start
```
