## Stripe

---

### Rules for billing:

---

-   never accept raw cc numbers
-   never store credit card numbers
-   always use an outside payment processor
-   Billing is hard
-   possible to avoid monthly payments/recurring payments and multiple plans
-   fraud and chargebacks are a pain

## Instructions

---

1. Install react-stripe checkout in root directory:

```
$ npm install --save react-stripe-checkout
```

_https://github.com/azmenak/react-stripe-checkout_

2. Setup projects secret key and public key in variable files on backend, only the public key on the frontend. Preferabbly in a .env.production and .env.development file.

3. Setup Payment component to be the stripe checkout library:

```javascript
import StripeCheckout from "react-stripe-checkout";

const Payments = () => {
    return (
        <StripeCheckout
            name="Emaily"
            description="$5 for 5 survey credits"
            amount={500}
            token={(token) => console.log(token)}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">Add Credits</button>
        </StripeCheckout>
    );
};

export default Payments;
```

4. Import the component to wherever you want it to be in your app and set it up to be used:

```javascript
import PaymentsComponent from "./paymentscomponent";

<PaymentsComponent />;
```
