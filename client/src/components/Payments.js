import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from 'react-redux';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="EmSendeer"
        description="$5 for 5 email credits"
        amount={500}
        token={token =>this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button                   className="text-primary py-2 px-4 bg-blue1 rounded-[40px]"
>
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
