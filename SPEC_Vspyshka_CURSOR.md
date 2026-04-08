SPEC.md — DreamStudio Vspyshka (Cursor Optimized)

IMPORTANT:
- Always follow this SPEC strictly
- Do NOT change architecture unless explicitly asked
- Do NOT introduce new frameworks
- Keep code simple, clean, and mobile-first

----------------------------------------

1. PRODUCT OVERVIEW

This is a Telegram Mini App for booking neuro-photoshoots.

Main idea:
User interacts with an AI assistant (Vspyshka) in a chat-like interface,
selects a tariff, chooses styles, and submits a booking.

The app is:
- mobile-first
- fast
- simple
- emotionally engaging

----------------------------------------

2. CORE USER FLOWS

FLOW 1: Onboarding
- Get user data from Telegram WebApp
- Ask for name if missing
- Save name in localStorage

FLOW 2: Booking
Step 1: Select tariff
Step 2: Select styles
Step 3: Enter data (username, phone, comment)
Step 4: Submit booking
Step 5: Show success screen

FLOW 3: Question / Chat
- User enters Telegram username
- Sends message
- Message is sent to admin
- Show confirmation message

FLOW 4: Profile
- Show user leads filtered by chatId

FLOW 5: Admin
- View all leads
- Update status
- View chat history

----------------------------------------

3. STATE MANAGEMENT (IMPORTANT)

Use React state (useState)

Main states:
- branch (navigation)
- step (flow step)
- booking (booking data)
- question (chat data)
- leads (data from DB)
- loading states

DO NOT introduce Redux or external state managers

----------------------------------------

4. DATA STRUCTURE

Booking:
- tariff
- styles[]
- telegramUsername
- phone
- comment
- preferredTime

Lead:
- id
- createdAt
- status
- type (booking/question)
- userName
- telegramUsername
- phone
- chatId
- chatHistory[]

----------------------------------------

5. TECH STACK (STRICT)

Frontend:
- React
- TypeScript
- Tailwind CSS

Platform:
- Telegram WebApp SDK

Backend:
- Supabase

Integrations:
- Google Sheets (webhook)
- Telegram Bot (notifications)

Build:
- Vite

DO NOT add:
- Next.js
- Redux
- Firebase
- any heavy libraries

----------------------------------------

6. FILE STRUCTURE

- App.tsx → main logic (DO NOT overload, keep clean)
- components/ → UI components
- services/ → API logic (supabase, sheets, notifications)
- constants.tsx → static data
- types.ts → types

----------------------------------------

7. UI / DESIGN RULES

Style:
- dark theme
- neon aesthetic
- futuristic + emotional

Colors:
- background: #070A12
- neonBlue: #2D7CFF
- neonCyan: #37D9FF
- neonViolet: #B04BFF
- neonPink: #FF4FD8

UI rules:
- rounded elements
- glass effect
- gradients
- soft animations

Animations:
- smooth fade-in
- subtle movement
- no aggressive motion

----------------------------------------

8. UX RULES (VERY IMPORTANT)

Assistant (Vspyshka) must:
- feel friendly
- guide user step-by-step
- never overload user with text
- always give clear next action

Tone:
- warm
- light
- motivating

----------------------------------------

9. API / SIDE EFFECTS

When booking:
- save to Supabase
- send to Google Sheets
- send Telegram notification

When question:
- send to admin
- save minimal data

----------------------------------------

10. DEVELOPMENT RULES FOR CURSOR

- Always read this SPEC before writing code
- Work step-by-step
- Do NOT rewrite entire files if not needed
- Modify only necessary parts
- Keep code readable and simple
- Avoid overengineering

----------------------------------------

11. FUTURE (DO NOT IMPLEMENT NOW)

- AI style recommendation
- image generation
- payment system
- full AI chat instead of admin

