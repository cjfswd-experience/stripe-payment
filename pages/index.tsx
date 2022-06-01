import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Stripe from '../components/Stripe'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE!);

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Payment - Javascript - @cjfswd</title>
        <meta name="description" content="experiencing payment gateways with javascript/typescript." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Elements stripe={stripePromise}>
          <Stripe />
        </Elements>
      </main>
      <footer>
      </footer>
    </div>
  )
}

export default Home
