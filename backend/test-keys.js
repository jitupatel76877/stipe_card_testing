require('dotenv').config()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

async function testKeys() {
  try {
    console.log('Testing Stripe keys...')
    console.log('Secret key:', process.env.STRIPE_SECRET_KEY?.substring(0, 20) + '...')
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })
    
    console.log('✅ Payment intent created:', paymentIntent.id)
    console.log('Client secret:', paymentIntent.client_secret?.substring(0, 20) + '...')
    
    // Try to retrieve it
    const retrieved = await stripe.paymentIntents.retrieve(paymentIntent.id)
    console.log('✅ Payment intent retrieved:', retrieved.id)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

testKeys()