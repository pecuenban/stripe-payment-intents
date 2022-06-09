import * as React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import './App.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  'pk_test_51K1ExWCgs43rUWiMTvt19pmEC2wSg97cPAgAG44pWtjyGVFlTUNysIgUR1AY9QJBtSEekg3CnFSGzPln4IQj0XS200Nu7EZt4v' 
);

export default function App() {
  const [clientSecret, setClientSecret] = React.useState('');

  React.useEffect(() => {
    setClientSecret(
      'pi_3L8kkqCgs43rUWiM0g7ZQYrq_secret_Bv4O64dR86OB79DIH4mzHy8W5'
    );
  });

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
