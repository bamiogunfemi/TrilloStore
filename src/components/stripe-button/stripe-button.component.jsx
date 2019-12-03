import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const StripeCheckoutButton = ({ price }) => {
  const priceToCents = price * 100;
  const publishableKey = 'pk_test_qTIGqH764GMaxXY3urvPc3Sx0003hmrwMp'

  const onToken = token => {
    alert('Payment Success!')
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name=' Trillo Stores'
      billingAddress
      shippingAddress
      image= {`<Logo/>`}
      description={`Your total is $${price}`}
      amount={priceToCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
