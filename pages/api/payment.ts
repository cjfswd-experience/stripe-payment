// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.PRIVATE_STRIPE!, { typescript: true, apiVersion: '2020-08-27' })

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == 'GET') {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: "brl",
        payment_method_types: ["card"]
      });
      res.send({
        clientSecret: paymentIntent.client_secret
      })
    } catch (error) {
      res.status(400).json({error: error})
    }
  }
}
