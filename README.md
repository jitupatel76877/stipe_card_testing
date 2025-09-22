# Stripe Payment Integration

## Setup

### Backend
1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Update `.env` with your Stripe secret key
4. Start server: `npm run dev`

### Frontend
1. Navigate to frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Update `.env.local` with your Stripe publishable key
4. Start development server: `npm run dev`

## Stripe Keys
- Get your keys from: https://dashboard.stripe.com/test/apikeys
- Use test keys for development
- Replace placeholder keys in environment files

## Usage
1. Start backend server (port 3001)
2. Start frontend server (port 3000)
3. Open http://localhost:3000
4. Enter payment amount and card details
5. Use test card: 4242 4242 4242 4242