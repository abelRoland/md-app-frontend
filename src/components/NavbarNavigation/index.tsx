'use client'
import Link from 'next/link'
import styles from './navbarNavigation.module.css'
import { usePathname, useSearchParams, useParams } from 'next/navigation'
import {
  HomeIcon,
  UserIcon,
  LinkIcon,
  VideoCameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ArrowLeftStartOnRectangleIcon,
} from '@heroicons/react/24/outline'

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  {
    name: 'Profile',
    href: '/profile',
    icon: UserIcon,
  },
  { name: 'Tips', href: '/tips', icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: 'Links', href: '/links', icon: LinkIcon },
  { name: 'Videos', href: '/videos', icon: VideoCameraIcon },
  { name: 'Logout', href: '/auth', icon: ArrowLeftStartOnRectangleIcon },
]

export default function NavbarNavigation() {
  const pathname = usePathname()
  const id = useParams<{ id: string }>()
  const idParams = id.id === undefined ? '' : `/${id.id}`
  const fullPath = `${pathname}`
  return (
    <div className={styles.navigationContainer}>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            className={
              fullPath === `${link.href}${idParams}`
                ? styles.linkContainerActive
                : styles.linkContainer
            }
            key={link.name}
            href={link.href}
          >
            <LinkIcon
              className={
                fullPath === `${link.href}${idParams}`
                  ? styles.iconsActive
                  : styles.icons
              }
            />
          </Link>
        )
      })}
    </div>
  )
}
