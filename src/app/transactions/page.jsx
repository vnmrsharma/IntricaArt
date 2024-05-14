import { Button } from '@/components/Button'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for Your Interest in the ART."
      intro="Please click on the button below to continue with your crypto wallet and buy the ART"
    />
  )
}
