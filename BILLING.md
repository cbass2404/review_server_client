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

2. Setup projects secret key and public key in variable files on backend, only the public key on the frontend.
