require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body
    
    if (!amount || amount < 50) {
      return res.status(400).send({
        error: { message: 'Amount must be at least $0.50' }
      })
    }

    console.log('Creating payment intent for amount:', amount)
    
    const paymentIntent = await stripe.paymentIntents.create({
      amount: parseInt(amount),
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    })

    console.log('Payment intent created:', paymentIntent.id)
    
    res.send({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error('Payment intent error:', error.message)
    res.status(400).send({
      error: {
        message: error.message,
      },
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log('Stripe key configured:', process.env.STRIPE_SECRET_KEY ? 'Yes' : 'No')
})