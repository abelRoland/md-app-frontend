import { Metadata } from 'next'
import Auth from '@/views/Auth'

export const metadata: Metadata = {
  title: 'MG App',
  description:
    'The app page for the people with MG that are looking for some advices and support.',
}

export default function Index() {
  return <Auth />
}
