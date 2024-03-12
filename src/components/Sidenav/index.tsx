'use client'
import Link from 'next/link'
import styles from './sidenav.module.css'
import { usePathname, useParams } from 'next/navigation'
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

export default function SideNav() {
  const pathname = usePathname()
  const id = useParams<{ id: string }>()
  const idParams = id.id === undefined ? '' : `/${id.id}`
  const fullPath = `${pathname}`

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            className={
              fullPath === `${link.href}${idParams}`
                ? styles.navLinkContainerActive
                : styles.navLinkContainer
            }
            key={link.name}
            href={link.href}
          >
            <LinkIcon className={styles.icons} />
            <p className={styles.navigationLinkName}>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
