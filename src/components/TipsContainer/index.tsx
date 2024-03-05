'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { retrieveRecords } from '@/lib/actions'
import { TipRecords } from '@/lib/global'
import Loading from '../Loading'

import styles from './tipsContainer.module.css'
import Link from 'next/link'
import { LoadTop } from '@/lib/constants'

export default function TipsContainer() {
  const [records, setRecords] = useState<TipRecords[]>([])
  const pathname = usePathname()
  const loading = true

  useEffect(() => {
    retrieveRecords(setRecords)
  }, [])

  return (
    <div
      className={
        pathname === '/' ? styles.tipContainerHome : styles.tipContainer
      }
    >
      {records.length > 0 ? (
        records.map((record, key) => (
          <div
            className={pathname === '/' ? styles.tipCardHome : styles.tipCard}
            key={key}
          >
            <p className={styles.tipKind}>{record.fields.tip_kind}</p>
            <div className={styles.tipBackground}>
              <p className={styles.tipTitle}>{record.fields.tip_title}</p>
            </div>
            <Link className={styles.tipButton} href={`/tips/${record.id}`}>
              MORE
            </Link>
          </div>
        ))
      ) : (
        <Loading loadTop={LoadTop.TOP30} />
      )}
    </div>
  )
}
