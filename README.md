# WhatsApp Automation CRM

A robust, self-hostable CRM for WhatsApp® built on Next.js and Supabase. It includes a shared inbox, contact management, sales pipelines, broadcasts, and no-code automations.

## Key Features

- **Shared Inbox**: Connect official WhatsApp Business API to allow multiple agents to collaborate, assign conversations, set statuses, and take internal notes.
- **Contacts & Tags**: Advanced contact management with custom fields, tags, and CSV import capabilities.
- **Sales Pipelines**: Visual Kanban-style board to track deals and pipeline metrics linked directly to customer conversations.
- **Broadcast Campaigns**: Send template messages approved by Meta to targeted audiences with personalized variable substitution and delivery/read tracking.
- **No-Code Automations**: Dynamic trigger actions based on keywords, inbound messages, new contacts, or schedules. Connect steps, add wait times, manage tags, and trigger webhooks.
- **Real-Time Analytics Dashboard**: Monitor message volume, average response times, pipeline conversion rates, and real-time activity feeds.
- **Account Control**: Built-in account management (profile updates, secure authentication, password changes, session control).

---

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.
- **Database & Auth**: Supabase (Postgres, Realtime, RLS, Storage, Auth).
- **Integration**: Meta Cloud API (official WhatsApp Business API).

---

## Getting Started

### Prerequisites

- Node.js (>= 20.0.0)
- npm or yarn
- A Supabase project
- Meta Developer account (for WhatsApp Cloud API setup)

### Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sapatil2212/WhatsApp-Automation-CRM.git
   cd WhatsApp-Automation-CRM
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Create a `.env.local` file by copying the template:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Supabase project keys, Meta WhatsApp Cloud API credentials, and other environment configuration values.

4. **Run the local development server**:
   ```bash
   npm run dev
   ```
   The app will start at `http://localhost:3000`.

---

## License

This project is licensed under the MIT License.
