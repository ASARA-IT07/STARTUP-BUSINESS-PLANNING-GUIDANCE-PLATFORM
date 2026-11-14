# ASARA Marketing Frontend — Comprehensive Technical Codebase Report

Welcome to the technical documentation report for the **ASARA Marketing Frontend** project. This guide is written specifically for developers with a beginner-level understanding of **Next.js**, **React**, **TypeScript**, and **CSS**. 

Every concept, folder, file, component, styling rule, and data flow pattern is broken down step-by-step with plain-English definitions so you can confidently understand, maintain, and expand this codebase.

---

## 1. Project Architecture & Folder Map

### 1.1 Core Concepts: How Next.js Works
Before diving into the files, let's clarify key terms you will see throughout this project:
- **React**: A JavaScript library for building user interfaces by combining small, reusable pieces of code called **components**.
- **Next.js**: A powerful framework built on top of React. It provides automatic page routing, performance optimizations, server-side rendering, and asset handling out of the box.
- **App Router (`src/app`)**: In modern Next.js (version 13+ and 16+), routing is file-system based. Every folder inside `src/app` that contains a `page.tsx` file automatically becomes a URL route in your browser. For example:
  - `src/app/page.tsx` $\rightarrow$ Accessible at `http://localhost:3003/`
  - `src/app/marketing/page.tsx` $\rightarrow$ Accessible at `http://localhost:3003/marketing`
- **Server Components vs. Client Components**:
  - By default in Next.js, components are **Server Components** — they run once on the server to prepare HTML and cannot use interactive React hooks like `useState` or click listeners like `onClick`.
  - When a component has `"use client";` at the very top line, it is a **Client Component**. This tells Next.js to package JavaScript for the browser so users can click buttons, type in text fields, toggle dropdowns, and trigger live UI updates.
- **Layouts (`layout.tsx`)**: A layout wraps pages. It provides a persistent outer shell (like `<html>`, `<body>`, global styles, and shared headers or sidebars) that does not reload when switching between routes.
- **Props**: Short for "properties". These are inputs passed from a parent component down to a child component, just like passing arguments to a function.
- **State (`useState`)**: Data that can change over time based on user interactions (e.g., text typed in a box, a selected button, or whether a popup modal is open). Whenever state changes, React automatically re-renders the component to show the new data.

---

### 1.2 Complete File & Directory Map
Below is the full tree of every file and folder in the `marketing-frontend` repository (excluding generated directories like `node_modules` and `.next`):

```text
marketing-frontend/
├── .gitignore                     # Git ignore rules for builds, caches, and node_modules
├── AGENTS.md                      # Operational and project guidelines for development
├── eslint.config.mjs              # ESLint linting configuration
├── next-env.d.ts                  # Next.js TypeScript declaration helper
├── next.config.ts                 # Next.js compiler and Turbopack bundler configuration
├── package-lock.json              # Exact dependency tree lockfile
├── package.json                   # Project metadata, scripts, and package dependencies
├── README.md                      # Quickstart documentation
├── tsconfig.json                  # TypeScript compiler settings and path aliases
├── tsconfig.tsbuildinfo           # Incremental TypeScript build cache
│
├── public/                        # Static static files served directly by the web server
│   ├── file.svg                   # Default Next.js vector icon
│   ├── globe.svg                  # Default Next.js vector icon
│   ├── next.svg                   # Next.js logo vector
│   ├── vercel.svg                 # Vercel logo vector
│   └── window.svg                 # Default Next.js vector icon
│
└── src/                           # Main application source code
    ├── app/                       # Next.js App Router directory
    │   ├── favicon.ico            # Browser tab favicon
    │   ├── globals.css            # Global CSS styling & Tailwind v4 imports
    │   ├── layout.tsx             # Root HTML layout shell and metadata
    │   ├── page.tsx               # Root route (/) redirect/re-export to /marketing
    │   └── marketing/             # Marketing module route folder
    │       └── page.tsx           # Main Marketing Planning dashboard page
    │
    ├── components/                # Modular, reusable React UI components
    │   ├── marketing/             # Components specific to the marketing module
    │   │   ├── BudgetBandSection.tsx         # Section 3: Monthly budget selection cards
    │   │   ├── BusinessTypeBanner.tsx        # Overview banner displaying business context
    │   │   ├── DeleteConfirmationModal.tsx   # Modal popup confirming marketing plan reset
    │   │   ├── PlanStatusCard.tsx            # Right sidebar card showing completion progress
    │   │   ├── ProviderProfileModal.tsx      # Modal popup displaying service provider details
    │   │   ├── RecommendedChannelsSection.tsx# Dynamic rule-based marketing channel suggestions
    │   │   ├── ServiceProviderDirectory.tsx  # Searchable, scrollable agency directory
    │   │   ├── TargetCustomerSection.tsx     # Section 2: Audience demographics & problem chips
    │   │   └── VisionMissionSection.tsx      # Section 1: Business vision & mission text areas
    │   └── sidebar/               # Navigation components
    │       └── Sidebar.tsx        # Left fixed navigation bar with business profile
    │
    ├── data/                      # Static datasets, options, and rule-based catalogues
    │   └── marketingData.ts       # Marketing channels, service providers, and option lists
    │
    └── types/                     # TypeScript type definitions and interfaces
        └── marketing.ts           # Interfaces for channels, providers, and plan state
```

---

### 1.3 Folder Roles & Responsibilities

1. **`src/app/`**:
   - Contains all routing endpoints. Next.js monitors this folder to build the application's URLs.
   - Houses `layout.tsx` which wraps the entire app in standard HTML tags and applies `globals.css`.
   - Contains `src/app/marketing/page.tsx`, which serves as the interactive orchestrator for the marketing planning interface.

2. **`src/components/`**:
   - Houses isolated, self-contained UI building blocks.
   - Separated into `components/sidebar/` (reusable navigation) and `components/marketing/` (modular sections for vision/mission, customer demographics, budget bands, recommended channels, status tracking, modals, and directory).
   - This keeps individual files small, readable, and easy to test or refactor.

3. **`src/data/`**:
   - Separates static business data and catalogue options from presentation logic.
   - Rather than hardcoding agency lists or channel rules inside JSX code, `marketingData.ts` holds well-structured mock data and rule configurations.

4. **`src/types/`**:
   - Houses TypeScript contracts (`interface` and `type`).
   - Ensures strict type safety across the entire application, preventing bugs such as misspelled property names or missing fields.

5. **`public/`**:
   - Holds static assets (images, SVGs, fonts) served directly by Next.js at the root path (e.g., `/globe.svg`).

---

## 2. Dependencies & Configuration

### 2.1 Dependencies (`package.json`)
The application dependencies are minimal, modern, and production-tested:

```json
{
  "name": "marketing-frontend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3003",
    "build": "next build",
    "start": "next start -p 3003",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.72.0",
    "next": "16.4.6",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "4.3.3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.6",
    "tailwindcss": "4.3.3",
    "typescript": "^5"
  }
}
```

#### Runtime Dependencies (`dependencies`):
- **`next` (`16.4.6`)**: The core Next.js framework engine providing the App Router, fast refresh during development, image optimization, and server runtime.
- **`react` (`19.3.0`) & `react-dom` (`19.3.0`)**: The latest React 19 libraries. `react` provides core component rendering, hooks (`useState`, `useCallback`), and JSX transformation. `react-dom` provides the bridge that mounts React components onto real web browser DOM nodes.
- **`lucide-react` (`^1.72.0`)**: A comprehensive, lightweight SVG icon library. Used throughout the interface for consistent UI symbols (e.g., `Store`, `Tag`, `Search`, `Check`, `AlertTriangle`, `ChevronDown`, `Mail`, `Phone`).

#### Development Dependencies (`devDependencies`):
- **`typescript` (`^5`)**: The TypeScript compiler that checks your code for errors before running it, ensuring variables match their expected types.
- **`@types/react`, `@types/react-dom`, `@types/node`**: TypeScript type definitions that provide auto-completion and type-checking for React APIs and Node.js environment globals.
- **`tailwindcss` (`4.3.3`) & `@tailwindcss/turbopack` (`4.3.3`)**: Tailwind CSS version 4. A utility-first CSS framework that compiles utility classes directly into high-performance CSS during the Turbopack build process.
- **`eslint` & `eslint-config-next`**: Code quality tools that scan files for common syntax errors, dead code, or accessibility issues.

#### Scripts:
- **`npm run dev`**: Starts the local development server at `http://localhost:3003`. Port `3003` is explicitly assigned so this marketing frontend runs independently without conflicting with other local teammate micro-frontends (which run on `3000` or `3001`).
- **`npm run build`**: Compiles and bundles the application for production deployment.
- **`npm run start`**: Runs the compiled production build on port `3003`.
- **`npm run lint`**: Executes ESLint to check for code standard violations.

---

### 2.2 Configuration Files

#### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
```
- **`cacheComponents: true`**: Instructs Next.js to cache reusable React component structures for faster navigation.
- **`partialPrefetching: true`**: Optimizes page transitions by preloading static parts of pages in the background.
- **`turbopack.rules`**: Hooks Tailwind CSS v4 into Next.js's high-speed Rust-based Turbopack compiler, enabling instantaneous stylesheet compilation.

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```
- **`"strict": true`**: Turns on strict type checking (e.g., requiring explicit types, checking for `null` or `undefined`).
- **`"paths": { "@/*": ["./src/*"] }`**: Configures the `@/` path alias. Instead of typing messy relative paths like `../../components/marketing/PlanStatusCard`, you can simply write `@/components/marketing/PlanStatusCard`.
- **`"jsx": "react-jsx"`**: Enables modern React JSX transformation without requiring `import React from 'react'` in every file.

---

## 3. Page-by-Page Breakdown

### 3.1 Root Layout (`src/app/layout.tsx`)
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASARA - Marketing Planning",
  description: "Startup Business Planning & Guidance Platform - Marketing Module",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
```
- **Purpose**: Serves as the top-level HTML wrapper for every page in the application.
- **Components & Imports**:
  - Imports `globals.css`, ensuring Tailwind styling is loaded globally across all routes.
  - Exports `metadata`, defining the browser tab title ("ASARA - Marketing Planning") and search engine description.
- **HTML Structure**:
  - Sets `<html lang="en" className="h-full antialiased">`. `antialiased` ensures clean font smoothing on Mac and Windows browsers.
  - Sets `<body className="min-h-full flex flex-col font-sans">`. The `children` parameter dynamically receives whatever page is currently loaded.

---

### 3.2 Root Page (`src/app/page.tsx`)
```tsx
export { default } from "./marketing/page";
```
- **Purpose**: Acts as an immediate route bridge. Whenever a user visits the root domain (`http://localhost:3003/`), this file automatically forwards them directly to the main Marketing Planning page (`./marketing/page.tsx`).

---

### 3.3 Main Marketing Page (`src/app/marketing/page.tsx`)
- **File Type**: Client Component (`"use client";`).
- **Role**: The central coordinator and state manager for the entire marketing module. It renders a modern, 3-column dashboard layout modeled after the Figma specification:
  1. **Left Sidebar (`Sidebar.tsx`)**: Fixed navigation menu.
  2. **Center Column (`<main>`)**: Form containing all 4 planning sections.
  3. **Right Sidebar (`<aside>`)**: Fixed progress card and service provider directory.

#### Visual Architecture Diagram
```
+-------------------------------------------------------------------------------------------------------+
|                                    Top Header (ASARA - Marketing Planning)                            |
+-------------------+---------------------------------------------------------------+-------------------+
|   LEFT SIDEBAR    |                        CENTER COLUMN                          |   RIGHT SIDEBAR   |
|   (Sidebar.tsx)   |               (Scrollable Marketing Form)                     |   (Stationary)    |
|                   |                                                               |                   |
| - Logo (ASARA)    | 1. BusinessTypeBanner                                         | 1. PlanStatusCard |
| - Business Profile| 2. Section 1: VisionMissionSection                            |    (Progress &    |
|   (Willow & Co.)  | 3. Section 2: TargetCustomerSection                           |     Actions)      |
| - Workspace Nav:  | 4. Section 3: BudgetBandSection                               |                   |
|   * Dashboard     | 5. Dynamic Section: RecommendedChannelsSection                | 2. ServiceProvider|
|   * Marketing (*) |    (Revealed once budget is chosen; contains "Finalize Plan") |    Directory      |
|   * Money         |                                                               |    (Independent   |
|   * Settings      |                                                               |     Card Scroll)  |
+-------------------+---------------------------------------------------------------+-------------------+
| MODAL OVERLAYS (Conditional):                                                                         |
| - ProviderProfileModal (Opens when clicking "View" on any agency)                                     |
| - DeleteConfirmationModal (Opens when clicking trash icon on finalized plan)                          |
+-------------------------------------------------------------------------------------------------------+
```

#### Managed State Variables:
Inside `MarketingPlanningPage`, React hooks maintain the live state of the marketing plan:
1. `vision` (`string`): User's business vision statement.
2. `mission` (`string`): User's business mission statement.
3. `ageRange` (`string`, default `"18–30"`): Target customer age demographic.
4. `location` (`string`, default `"Sri Lanka"`): Target geographic location.
5. `incomeLevel` (`string`, default `"Any"`): Target customer income bracket.
6. `selectedProblems` (`string[]`): Array of customer pain points selected by the user.
7. `selectedPlatforms` (`string[]`): Array of social media/web platforms where customers spend time.
8. `budgetBand` (`BudgetBand | null`, default `null`): Chosen monthly budget (`"Low"`, `"Medium"`, or `"High"`).
9. `selectedChannels` (`string[]`): Array of channel IDs the user has added to their plan.
10. `status` (`PlanStatus`, default `"Draft"`): Current plan lifecycle status (`"Draft"`, `"Completed"`, or `"Editing"`).
11. `activeProvider` (`ServiceProvider | null`): Holds the provider object when a user clicks "View", triggering the `ProviderProfileModal`.
12. `isDeleteModalOpen` (`boolean`): Controls visibility of the `DeleteConfirmationModal`.

#### Section Completion & Progress Calculation:
The page evaluates progress dynamically:
```typescript
const isSection1Complete = vision.trim() !== "" && mission.trim() !== "";
const isSection2Complete = selectedProblems.length > 0 && selectedPlatforms.length > 0;
const isSection3Complete = budgetBand !== null;
const isSection4Complete = selectedChannels.length > 0;

const completedSectionsCount =
  (isSection1Complete ? 1 : 0) +
  (isSection2Complete ? 1 : 0) +
  (isSection3Complete ? 1 : 0) +
  (isSection4Complete ? 1 : 0);
```
This count is passed directly to `PlanStatusCard`, which renders a green progress bar (0%, 25%, 50%, 75%, 100%).

#### User Interaction Handlers:
- **`handleSelectBand(band)`**: Triggered when the user selects a budget band. If the newly selected budget band is different from the previous one, it clears `selectedChannels` to ensure channels match the new budget tier.
- **`toggleProblem(problem)` & `togglePlatform(platform)`**: Add or remove items from the respective multi-select arrays.
- **`toggleChannel(channelId)`**: Toggles a marketing channel into or out of `selectedChannels`.
- **`handleFinalize()`**: Validates that both a budget band and at least one channel are selected, then changes `status` to `"Completed"`. This locks all inputs into read-only mode.
- **`handleEdit()`**: Changes `status` to `"Editing"`, unlocking inputs so the user can make modifications and click "Save Changes".
- **`handleDeleteConfirm()`**: Confirms reset in the modal, clearing the budget and channels and reverting `status` to `"Draft"`.

---

## 4. Detailed Component-by-Component Analysis

This section inspects every custom React component in the application.

---

### 4.1 `Sidebar.tsx` (`src/components/sidebar/Sidebar.tsx`)

#### Purpose
Renders the permanent, non-scrolling left navigation bar. It identifies the application as **ASARA**, shows the active business profile ("Willow & Co."), provides navigation links to all platform modules (Dashboard, Marketing, Money, Legal, etc.), and includes bottom utility links (Settings, Log out).

#### Props & State
```typescript
interface SidebarProps {
  activeItem?: "Dashboard" | "Tasks" | "Products" | "Money" | "Marketing" | "Organization" | "Legal";
}
```
- **`activeItem` (optional)**: Manually specifies which navigation item should appear highlighted with a green badge and active border.
- **Hook: `usePathname()`**: A Next.js navigation hook that reads the current browser URL path (e.g., `"/marketing"`).
- **`currentActive` logic**: If `activeItem` is provided, it uses it. Otherwise, it inspects `pathname`: if the path starts with `"/marketing"`, it automatically activates `"Marketing"`; if `"/financial-modelling"`, it activates `"Money"`.

#### Code Walkthrough
1. **Container (`<aside>`)**:
   - Styled with `w-[260px] h-screen sticky top-0 bg-[#F4F4F2] border-r border-gray-200 flex flex-col`.
   - Uses `no-scrollbar` so that even if the screen height shrinks, no ugly scrollbar appears on the sidebar.
2. **Logo**:
   - Renders a clean text logo `"ASARA"` linking back to the root route `/`.
3. **Current Business Card**:
   - Displays a styled green box (`bg-[#739472]`) showing `"Willow & Co."` and `"Business profile"`.
4. **Navigation List (`navItems.map`)**:
   - Loops through an array of objects `{ label, icon, href }`.
   - Checks `const isActive = currentActive === item.label;`.
   - If active, renders the `<ActiveNavItem>` sub-component with a rich green pill background (`bg-[#739472]`), white text, and a darker green accent indicator (`bg-[#2F6B4F]`).
   - If inactive, renders `<NavItem>` which has subtle green text (`text-[#436E58]`) and a soft background highlight on hover (`hover:bg-[#e8ede9]`).
5. **Sub-components (`NavItem` & `ActiveNavItem`)**:
   - If the item's `href` is valid (not `"#"`), it wraps the element in a Next.js `<Link>` component for instant, client-side routing without reloading the browser.

---

### 4.2 `BusinessTypeBanner.tsx` (`src/components/marketing/BusinessTypeBanner.tsx`)

#### Purpose
Displays the contextual summary at the very top of the marketing planning form. It reminds the founder that their business model is configured as selling **"Products"** via **"One-time sale"**, ensuring the marketing recommendations make business sense.

#### Props & State
- **Props**: None. This is a purely presentational display component.
- **State**: None. It renders static business context values.

#### Code Walkthrough
1. **Outer Box**:
   - Uses a soft sage-tinted background (`bg-[#f0f4ef]`) with rounded corners (`rounded-xl`) and a border (`border-[#d2ded6]`).
   - Uses `flex flex-wrap items-center justify-between gap-4` to adapt smoothly to both desktop and mobile screens.
2. **Left Identity Block**:
   - Displays a green square container (`bg-[#2F6B4F]`) housing the Lucide `Store` icon.
   - Shows a small uppercase label `"OVERVIEW"` above the section title `"Business type"`.
3. **Right Pill Cards**:
   - Renders two distinct white pill cards:
     - **Sell Type**: Houses a `Tag` icon and states `"Products"`.
     - **Revenue Type**: Houses a `DollarSign` icon and states `"One-time sale"`.

---

### 4.3 `VisionMissionSection.tsx` (`src/components/marketing/VisionMissionSection.tsx`)

#### Purpose
Provides the user interface for **Section 1: Vision and Mission**. Founders type out their long-term dream for their enterprise ("Vision") and the actionable steps they will take to get there ("Mission").

#### Props & State
```typescript
interface VisionMissionSectionProps {
  vision: string;
  setVision: (val: string) => void;
  mission: string;
  setMission: (val: string) => void;
  readOnly?: boolean;
}
```
- **`vision` & `mission`**: Current text values held in the parent page's state.
- **`setVision` & `setMission`**: State updater functions passed down to update the parent state when the user types.
- **`readOnly` (optional, default `false`)**: When the marketing plan is finalized (`"Completed"`), this becomes `true`, disabling the text boxes so inputs cannot be altered accidentally.

#### Code Walkthrough
1. **Number Badge & Header**:
   - Displays a circular green badge containing the number `"1"` alongside the title `"Vision and Mission"`.
2. **Textarea Grid (`grid grid-cols-1 md:grid-cols-2 gap-6`)**:
   - Splits into two equal side-by-side columns on medium and larger screens (`md:`), collapsing into a single column on mobile.
3. **Character Limitation & Counters**:
   - Defines `const MAX_CHARS = 500;`.
   - In `onChange`: `setVision(e.target.value.slice(0, MAX_CHARS))` prevents the user from exceeding 500 characters.
   - A live character counter below each box dynamically renders `{vision.length}/{MAX_CHARS}` (e.g., `82/500`).
4. **Disabled Styling**:
   - When `readOnly` is active, the `<textarea>` receives `disabled:bg-gray-50 disabled:text-gray-600 resize-none`, giving clear visual feedback that the section is locked.

---

### 4.4 `TargetCustomerSection.tsx` (`src/components/marketing/TargetCustomerSection.tsx`)

#### Purpose
Represents **Section 2: Target customer profile**. Allows the startup founder to define exactly who their customers are, their age bracket, location, income level, the specific problems they face, and the digital channels where they spend their time.

#### Props & State
```typescript
interface TargetCustomerSectionProps {
  ageRange: string;
  setAgeRange: (val: string) => void;
  location: string;
  setLocation: (val: string) => void;
  incomeLevel: string;
  setIncomeLevel: (val: string) => void;
  selectedProblems: string[];
  toggleProblem: (problem: string) => void;
  selectedPlatforms: string[];
  togglePlatform: (platform: string) => void;
  readOnly?: boolean;
}
```
- Receives state values and toggle handlers from `MarketingPlanningPage`.
- Imports `PROBLEM_OPTIONS` and `PLATFORM_OPTIONS` from `@/data/marketingData`.

#### Code Walkthrough
1. **Row 1: Demographic Dropdowns (`grid grid-cols-1 sm:grid-cols-3 gap-4`)**:
   - Renders 3 custom-styled HTML `<select>` dropdowns:
     - **Age range**: Options include `"18–30"`, `"31–45"`, `"46–60"`, `"All ages"`.
     - **Location**: Geotargeted options including `"Sri Lanka"`, `"Western Province"`, `"Colombo District"`, `"Island-wide Urban"`, `"Global / Export"`.
     - **Income level**: Options include `"Any"`, `"Low to Middle"`, `"Middle income"`, `"Upper middle / High"`.
   - Each select element uses `appearance-none` to strip default ugly browser dropdown arrows, replacing them with a crisp Lucide `ChevronDown` icon positioned with `absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`.
2. **Row 2: Interactive Chips (Multi-Select)**:
   - **Main problem or need**: Displays selectable badges (`"High product prices"`, `"Lack of time"`, `"Delivery delays"`, etc.).
   - **Where do they spend time?**: Displays platform badges (`"Facebook"`, `"Instagram"`, `"TikTok"`, `"YouTube"`, `"Google Search"`, `"WhatsApp"`).
   - **Selection Logic**:
     ```tsx
     const isSelected = selectedProblems.includes(problem);
     ```
     - If selected: The badge turns soft green (`bg-[#e1eee6] text-[#285c43] border-[#b2d4c1]`) and displays a `×` symbol.
     - If not selected: The badge is white with a light border and displays a `+` symbol.
     - Clicking the badge triggers `toggleProblem(problem)`, which immutably adds or removes it from the array.

---

### 4.5 `BudgetBandSection.tsx` (`src/components/marketing/BudgetBandSection.tsx`)

#### Purpose
Represents **Section 3: Marketing budget band**. Allows the founder to select one of three monthly marketing expenditure tiers, which dictates which marketing channels are recommended in the subsequent section.

#### Props & State
```typescript
interface BudgetBandSectionProps {
  selectedBand: BudgetBand | null;
  onSelectBand: (band: BudgetBand) => void;
  readOnly?: boolean;
}
```
- **`selectedBand`**: Current budget selection (`"Low"`, `"Medium"`, `"High"`, or `null`).
- **`onSelectBand`**: Callback notifying the parent page when a new tier is clicked.

#### Code Walkthrough
1. **Bands Data Definition**:
   ```typescript
   const bands: { band: BudgetBand; label: string; range: string }[] = [
     { band: "Low", label: "Low", range: "Under LKR 25,000" },
     { band: "Medium", label: "Medium", range: "LKR 25,000 to 100,000" },
     { band: "High", label: "High", range: "Over LKR 100,000" },
   ];
   ```
2. **Radio Cards Grid (`grid grid-cols-1 sm:grid-cols-3 gap-4`)**:
   - Maps through the tiers to render interactive cards.
   - **Custom Radio Indicator**:
     - Consists of an outer circle (`w-[18px] h-[18px] rounded-full border`).
     - When selected, it fills with deep green (`bg-[#2F6B4F]`) and renders a small white dot in the center (`<div className="w-2 h-2 rounded-full bg-white" />`).
   - **Card Highlighting**:
     - When `isSelected === true`, the entire card highlights with a green ring and soft green background (`border-[#2F6B4F] bg-[#f2f7f4] ring-1 ring-[#2F6B4F]`).

---

### 4.6 `RecommendedChannelsSection.tsx` (`src/components/marketing/RecommendedChannelsSection.tsx`)

#### Purpose
Renders **Section 4: Recommended marketing channels**. This section is dynamically revealed only after a user selects a budget band. It analyzes the selected budget and filters channels from `RECOMMENDED_CHANNELS` using fixed business rules. It also provides the **"Finalize Plan"** or **"Save Changes"** action button.

#### Props & State
```typescript
interface RecommendedChannelsSectionProps {
  budgetBand: BudgetBand | null;
  selectedChannels: string[];
  toggleChannel: (channelId: string) => void;
  onFinalize: () => void;
  planStatus: PlanStatus;
}
```

#### Code Walkthrough
1. **Conditional Mounting**:
   - `if (!budgetBand) return null;` — If no budget has been chosen yet, this component renders nothing.
2. **Rule-Based Channel Filtering**:
   ```typescript
   const channels = RECOMMENDED_CHANNELS.filter((ch) =>
     ch.budgetBands.includes(budgetBand)
   );
   ```
   - If `"Low"` is selected: Recommends zero-cost community and organic channels (WhatsApp/Facebook groups, organic TikTok/Instagram reels, email lists/referrals).
   - If `"Medium"` is selected: Recommends targeted performance channels (Paid Meta Ads, SEO optimization, micro-influencer partnerships).
   - If `"High"` is selected: Recommends growth-scaling channels (YouTube & Video Ads, Google Search Ads, Marketing Automation/CRM).
3. **Dynamic Icon Resolver (`getIcon`)**:
   - Maps string icon identifiers (`"message-circle"`, `"search"`, `"cpu"`) to clean Lucide SVG components.
4. **Channel Add/Remove Action**:
   - Checks `const isAdded = selectedChannels.includes(channel.id);`.
   - If not added: Shows `"+ Add to plan"` button with an outline border.
   - If added: Shows `"✓ Added"` button with a filled light-green background.
5. **Finalize Button**:
   - Hidden when `planStatus === "Completed"`.
   - If in `"Editing"` mode, the button text reads `"Save Changes"`.
   - If in `"Draft"` mode, it reads `"Finalize Plan"`.
   - Clicking triggers `onFinalize()`, which locks the plan.

---

### 4.7 `PlanStatusCard.tsx` (`src/components/marketing/PlanStatusCard.tsx`)

#### Purpose
Located at the top of the stationary right sidebar. Displays the real-time completion state of the marketing plan, including the status badge (`Draft`, `Completed`, or `Editing`), instructional copy, a dynamic progress bar, and management buttons (Edit and Delete).

#### Props & State
```typescript
interface PlanStatusCardProps {
  status: PlanStatus;
  completedSections: number;
  totalSections: number;
  onEdit: () => void;
  onDelete: () => void;
}
```
- Calculates completion percentage: `const percent = Math.round((completedSections / totalSections) * 100);`.

#### Code Walkthrough
1. **Status Badge Display**:
   - **Draft**: Amber badge (`bg-[#fff2db] text-[#97641c]`).
   - **Completed**: Green badge (`bg-[#e2f0e7] text-[#246747]`).
   - **Editing**: Blue badge (`bg-[#e8f1f5] text-[#205470]`).
2. **Action Icons (Edit & Delete)**:
   - When the plan is `"Completed"`, an `Edit2` pencil icon and a `Trash2` icon appear next to the badge.
   - Clicking pencil triggers `onEdit()` to reopen inputs.
   - Clicking trash triggers `onDelete()` to open the delete confirmation modal.
3. **Animated Progress Bar**:
   - The track is a light gray bar: `<div className="w-full bg-[#e8eee9] rounded-full h-2.5 overflow-hidden mb-2">`.
   - The fill is an animated green bar: `<div className="bg-[#2F6B4F] h-2.5 rounded-full transition-all duration-500 ease-out" style={{ width: `${percent}%` }} />`.
   - The label below displays `"X of 4 sections completed (Y%)"`.

---

### 4.8 `ServiceProviderDirectory.tsx` (`src/components/marketing/ServiceProviderDirectory.tsx`)

#### Purpose
Located below the plan status card in the right sidebar. Displays a searchable, filterable directory of local marketing service providers (graphic design, web development, branding agencies). Designed with an **independently scrollable card container** that shows exactly 3 cards on initial load without moving the headers or parent page.

#### Props & State
```typescript
interface ServiceProviderDirectoryProps {
  onSelectProvider: (provider: ServiceProvider) => void;
}
```
- **Internal State**:
  - `searchQuery` (`string`): The text typed in the search input.
  - `selectedCategory` (`string`, default `"Any category"`): Active category filter.
  - `selectedBizType` (`string`, default `"Products"`): Business type filter.

#### Code Walkthrough
1. **Multi-Criteria Filter Logic**:
   ```typescript
   const filteredProviders = SERVICE_PROVIDERS.filter((provider) => {
     const matchesSearch =
       provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
       provider.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
       provider.categories.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

     const matchesCategory =
       selectedCategory === "Any category" ||
       provider.categories.includes(selectedCategory);

     const matchesBizType =
       selectedBizType === "Any" ||
       provider.businessTypes.includes(selectedBizType);

     return matchesSearch && matchesCategory && matchesBizType;
   });
   ```
2. **Pinned Controls (`shrink-0`)**:
   - The directory header, search input, and filter dropdowns all carry `shrink-0` and sit outside the scroll container, remaining permanently visible.
3. **Isolated Card Scroll Container**:
   ```tsx
   <div className="divide-y divide-[#eef4f0] h-[234px] overflow-y-auto overscroll-contain no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
   ```
   - **Exact Height Calibration**: Each provider card row is set to `h-[78px] shrink-0`.
   - Container height is set to `h-[234px]` ($3 \times 78\text{px} = 234\text{px}$).
   - This mathematically ensures that **exactly 3 provider cards** are visible on load, keeping the 4th, 5th, and 6th cards hidden until scrolled.
   - `overscroll-contain`: Prevents scroll chaining so scrolling providers doesn't accidentally scroll the window.
   - `no-scrollbar`: Completely hides the browser scrollbar for a minimalist, clean finish.
4. **"View" Profile Trigger**:
   - Clicking `"View"` fires `onSelectProvider(provider)`, passing the chosen agency object to the parent page to open `ProviderProfileModal`.

---

### 4.9 `ProviderProfileModal.tsx` (`src/components/marketing/ProviderProfileModal.tsx`)

#### Purpose
An interactive popup modal that displays a comprehensive profile of a service provider when a user clicks "View" in the directory.

#### Props & State
```typescript
interface ProviderProfileModalProps {
  provider: ServiceProvider | null;
  onClose: () => void;
}
```
- If `provider === null`, the component returns `null` (renders nothing).

#### Code Walkthrough
1. **Backdrop & Focus Trap**:
   - Full-screen fixed overlay: `<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn">`.
   - Dimmed black background with subtle blur (`backdrop-blur-xs`) and a smooth fade-in animation.
2. **Modal Card Structure**:
   - **Header**: Shows provider avatar with initials (`CH`, `BW`, `IM`, `AD`, etc.), agency name, tagline, and category tags.
   - **About Section**: Full paragraph biography of the agency.
   - **Services Offered**: A bulleted checklist with `CheckCircle2` green icons listing specific packages and descriptions.
   - **Contact Information Grid**: 2-column contact cards featuring direct email, telephone, WhatsApp, web link, and physical office location in Sri Lanka.
   - **Close Button & ESC handling**: Calls `onClose()` to dismiss the modal and restore focus to the page.

---

### 4.10 `DeleteConfirmationModal.tsx` (`src/components/marketing/DeleteConfirmationModal.tsx`)

#### Purpose
A safety dialog that protects users from accidental data loss. Appears when clicking the trash can icon on a finalized marketing plan.

#### Props & State
```typescript
interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}
```

#### Code Walkthrough
1. **Conditional Render**:
   - `if (!isOpen) return null;`
2. **Warning Visuals**:
   - Displays a red circular warning badge with the Lucide `AlertTriangle` icon.
   - Clearly alerts the founder: *"Delete this marketing plan? Your finalized marketing plan will be removed. This cannot be undone."*
3. **Action Buttons**:
   - **Cancel**: Calls `onCancel()` to close the modal without making any changes.
   - **Delete Plan**: Highlighted in red (`bg-red-600 hover:bg-red-700`). Calls `onConfirm()` to reset the plan status back to Draft.

---

## 5. Complete CSS & Styling Guide

The styling in this project is built using modern **Tailwind CSS v4** combined with targeted custom CSS utilities in `src/app/globals.css`.

---

### 5.1 `src/app/globals.css` Line-by-Line Breakdown

```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}

/* Hide scrollbar utility for clean, seamless layouts */
.no-scrollbar::-webkit-scrollbar {
  display: none;
  width: 0;
  height: 0;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
```

#### Line-by-Line Explanation:
1. **`@import "tailwindcss";`**:
   - In Tailwind CSS v4, this single line replaces legacy directives (`@tailwind base; @tailwind components; @tailwind utilities;`). It imports Tailwind's complete styling engine.
2. **`:root { --background: #ffffff; --foreground: #171717; }`**:
   - Defines standard CSS custom properties (variables) for the default light theme: clean white background with charcoal/black text.
3. **`@theme inline { ... }`**:
   - Tailwind v4 theme mapping. Connects CSS variables directly to Tailwind utility names like `bg-background` and `text-foreground`.
4. **`@media (prefers-color-scheme: dark) { ... }`**:
   - A CSS media query that listens to the user's operating system preferences. If the operating system is set to dark mode, it switches the base background to `#0a0a0a` and foreground to `#ededed`.
5. **`body { font-family: Arial, Helvetica, sans-serif; }`**:
   - Applies clean, native sans-serif typography across the document without relying on external web font downloads (preventing network latency and offline build errors).
6. **`.no-scrollbar` Utility**:
   - **`::-webkit-scrollbar { display: none; width: 0; height: 0; }`**: Hides scrollbars in Chromium-based browsers (Chrome, Edge, Brave, Opera) and WebKit (Safari).
   - **`-ms-overflow-style: none;`**: Hides scrollbars in legacy Microsoft Internet Explorer and Edge.
   - **`scrollbar-width: none;`**: Standard CSS property that hides scrollbars in Mozilla Firefox.
   - This utility ensures that scrollable elements (like the center planning form and the service provider directory) can be smoothly scrolled using trackpads and mouse wheels without showing visual scrollbars.

---

### 5.2 Tailwind CSS Utility Classes Reference
Throughout the components, Tailwind classes are used to craft the exact visual appearance specified in Figma. Below is a beginner-friendly categorization of the primary classes used:

#### 1. Layout & Positioning
- **`flex` / `inline-flex`**: Activates Flexbox layout mode, arranging child elements in a row or column.
- **`flex-col`**: Arranges flex children vertically from top to bottom.
- **`items-center`**: Centers child elements vertically along the cross-axis.
- **`justify-between`**: Pushes child elements to opposite ends, putting all available space between them.
- **`shrink-0`**: Crucial class that prevents an element from shrinking when space is constrained. Used on headers, search inputs, and sidebar cards to prevent them from compressing.
- **`min-w-0`**: Allows flex items to shrink below their content size, enabling text truncation (`truncate`).
- **`sticky top-0`**: Keeps an element stuck to the top of the viewport when scrolling.
- **`fixed inset-0 z-50`**: Positions modal overlays over the entire screen with a high stacking order (`z-index: 50`).

#### 2. Grid System
- **`grid`**: Activates CSS Grid layout.
- **`grid-cols-1 sm:grid-cols-3`**: Single column on small mobile screens; automatically expands into 3 equal columns on tablet and desktop screens (`sm:` $\ge 640\text{px}$).
- **`grid-cols-1 md:grid-cols-2`**: Single column on mobile; expands into 2 columns on medium screens (`md:` $\ge 768\text{px}$).
- **`gap-4` / `gap-6`**: Defines uniform spacing between grid items (16px and 24px respectively).

#### 3. Spacing (Margin & Padding)
- **`p-4` / `p-6` / `p-8`**: Internal padding around an element (16px, 24px, 32px).
- **`px-3 py-1.5`**: Horizontal padding of 12px, vertical padding of 6px.
- **`mb-4` / `mt-2`**: Margin bottom (16px) or margin top (8px) to push neighboring elements away.
- **`space-y-4` / `space-y-6`**: Automatically adds vertical margins between all direct sibling elements.

#### 4. Design System Color Palette
The application uses a tailored, nature-inspired green and neutral palette:
- **`#2F6B4F` (Primary Forest Green)**: Used for key identity elements, active radio buttons, primary action buttons, and progress indicators.
- **`#193b30` / `#295f5c` (Deep Emerald Headlines)**: High-contrast green-tinted charcoal for readable, commanding headings.
- **`#739472` (Sage Green)**: Used on active navigation sidebar pills and current business profile badges.
- **`#F4F4F2` (Soft Canvas Gray)**: The overarching application background color, providing comfortable contrast against pure white cards.
- **`#e2f0e7` / `#f2f7f4` (Pale Mint Backgrounds)**: Used for active chips, selected radio cards, and completion badges.
- **`#dce5df` / `#cbd7d0` (Muted Green Borders)**: Clean, subtle 1px borders separating form cards and inputs.

#### 5. Borders & Rounded Corners
- **`rounded-md` (6px)**: Form inputs, dropdowns, and small buttons.
- **`rounded-lg` (8px)**: Channel rows and medium pill cards.
- **`rounded-[10px]` / `rounded-xl` (10–12px)**: Outer module card shells and modal dialogs.
- **`rounded-full`**: Perfectly circular badges, radio buttons, and avatars.
- **`divide-y divide-[#eef4f0]`**: Adds clean 1px horizontal separator lines between stacked list items without requiring manual borders on every child.

#### 6. Hover & State Modifiers
- **`hover:bg-[#245840]`**: Darkens the primary green button on mouse hover.
- **`hover:bg-[#fafcfb]`**: Provides subtle light-green row highlights when hovering over channel items and service providers.
- **`focus:ring-2 focus:ring-[#2F6B4F]`**: Highlights textareas and inputs with a focused green ring when clicked or typed in.
- **`disabled:bg-gray-50 disabled:cursor-not-allowed`**: Visually dims inputs and updates the mouse cursor to a prohibited icon when a section is locked.

---

## 6. Data Flow & Backend/API Integration

### 6.1 Current Architecture: Reactive In-Memory State
In this phase of the platform, the Marketing Frontend operates as a **fast, reactive Single Page Application (SPA)** using React's in-memory state:

```
[ User Interaction ]
         │ (e.g., clicks channel, selects budget, types vision)
         ▼
[ Event Handlers ] ──▶ (handleSelectBand, toggleChannel, setVision)
         │
         ▼
[ Central Page State (src/app/marketing/page.tsx) ]
         │
         ├──▶ Evaluates Rules (isSection1Complete, completedSectionsCount)
         │
         ▼
[ Child Components Re-Render ]
  ├── PlanStatusCard ──────────▶ Updates progress bar (e.g., 75%)
  ├── RecommendedChannelsSection ──▶ Renders channels matching budget
  └── Form Sections ───────────▶ Updates input fields and chip badges
```

1. **State Ownership**:
   - The master state resides at the highest common parent: `src/app/marketing/page.tsx`.
   - Child components never mutate state directly; they receive values via **props** and invoke **callbacks** (e.g., `setVision(val)`, `onSelectBand(band)`).
2. **Rule Evaluation Engine**:
   - When `budgetBand` is selected (e.g., `"Low"`), `RecommendedChannelsSection` automatically re-filters `RECOMMENDED_CHANNELS` to show only relevant channels.
   - If the user switches from `"Low"` to `"High"`, `handleSelectBand` resets `selectedChannels`, preventing mismatched marketing strategies.

---

### 6.2 Pre-Architected State Schema (`MarketingPlanState`)
The entire state is structured in [`src/types/marketing.ts`](file:///D:/Ravindu/Documents/Uni/SProject/STARTUP-BUSINESS-PLANNING-GUIDANCE-PLATFORM/marketing-frontend/src/types/marketing.ts) to match standard JSON payloads:

```typescript
export interface MarketingPlanState {
  vision: string;
  mission: string;
  ageRange: string;
  location: string;
  incomeLevel: string;
  selectedProblems: string[];
  selectedPlatforms: string[];
  budgetBand: BudgetBand | null;
  selectedChannels: string[];
  status: PlanStatus;
}
```

---

### 6.3 Future Backend API Integration Guide
When connecting this frontend to a backend database (e.g., Node.js / Express, Python / FastAPI, or Next.js Route Handlers), the integration points are already clearly defined:

#### 1. Fetching Existing Marketing Plan (`GET /api/marketing`)
In `src/app/marketing/page.tsx`, you can add a `useEffect` hook to retrieve the startup's saved marketing plan upon page load:
```typescript
useEffect(() => {
  async function loadMarketingPlan() {
    try {
      const response = await fetch("/api/marketing");
      if (response.ok) {
        const data: MarketingPlanState = await response.json();
        setVision(data.vision);
        setMission(data.mission);
        setAgeRange(data.ageRange);
        setLocation(data.location);
        setIncomeLevel(data.incomeLevel);
        setSelectedProblems(data.selectedProblems);
        setSelectedPlatforms(data.selectedPlatforms);
        setBudgetBand(data.budgetBand);
        setSelectedChannels(data.selectedChannels);
        setStatus(data.status);
      }
    } catch (error) {
      console.error("Failed to load marketing plan:", error);
    }
  }
  loadMarketingPlan();
}, []);
```

#### 2. Finalizing & Saving the Plan (`POST` or `PUT /api/marketing`)
Inside `handleFinalize`:
```typescript
const handleFinalize = async () => {
  const payload: MarketingPlanState = {
    vision,
    mission,
    ageRange,
    location,
    incomeLevel,
    selectedProblems,
    selectedPlatforms,
    budgetBand,
    selectedChannels,
    status: "Completed",
  };

  try {
    const res = await fetch("/api/marketing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("Completed");
    }
  } catch (error) {
    alert("Error saving marketing plan to server.");
  }
};
```

#### 3. Deleting or Resetting the Plan (`DELETE /api/marketing`)
Inside `handleDeleteConfirm`:
```typescript
const handleDeleteConfirm = async () => {
  try {
    await fetch("/api/marketing", { method: "DELETE" });
    setIsDeleteModalOpen(false);
    setStatus("Draft");
    setBudgetBand(null);
    setSelectedChannels([]);
  } catch (error) {
    console.error("Failed to delete marketing plan:", error);
  }
};
```

This clean separation ensures that connecting a database, authentication, or REST/GraphQL API will require zero changes to the underlying visual components.

---

## 7. Developer Cheatsheet & Quickstart

| Goal | Command or File |
| :--- | :--- |
| **Run Development Server** | `npm run dev` (Runs on `http://localhost:3003`) |
| **Type Check & Validate** | `npx tsc --noEmit` |
| **Build for Production** | `npm run build` |
| **Main Page Coordinator** | `src/app/marketing/page.tsx` |
| **Navigation Sidebar** | `src/components/sidebar/Sidebar.tsx` |
| **Service Provider Directory** | `src/components/marketing/ServiceProviderDirectory.tsx` |
| **Marketing Catalogues & Rules**| `src/data/marketingData.ts` |
| **TypeScript Type Definitions** | `src/types/marketing.ts` |
| **Global Styles & CSS Utilities**| `src/app/globals.css` |

---
*Report generated and validated for the ASARA Startup Business Planning & Guidance Platform.*
