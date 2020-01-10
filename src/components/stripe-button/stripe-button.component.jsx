import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


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
      image='https://res.cloudinary.com/bamiogunfemi/image/upload/v1578694739/android-icon-36x36_iq4k0o.png'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceToCents}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
