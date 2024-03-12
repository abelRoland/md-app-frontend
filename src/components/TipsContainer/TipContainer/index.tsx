'use client'
import React, { useState, useEffect } from 'react'
import { fetchTip } from '@/lib/actions'
import { TipRecords } from '@/lib/global'
import styles from './tipContainer.module.css'
import Link from 'next/link'
import Loading from '@/components/Loading'

export default function TipContainer({ params }: { params: { id: string } }) {
  const id = params.id
  const [loading, setLoading] = useState(true)
  const [tip, setTip] = useState<TipRecords>({
    id: '',
    fields: { tip_kind: '', tip_description: '', tip_title: '' },
  })

  useEffect(() => {
    async function loadTip() {
      const loadedTip = await fetchTip(id)
      if (loadedTip) {
        setTip(loadedTip)
        setLoading(false)
      }
    }

    loadTip()
  }, [id])

  return (
    <>
      <h1 className={styles.headerPage}>Tips</h1>
      <div className={styles.contentContainer}>
        <div className={styles.pageContentContainer}>
          {loading ? (
            <Loading />
          ) : (
            <div className={styles.tipContainer}>
              <h2 className={styles.tipIdHeader}>{tip.fields.tip_title}</h2>
              <p
                className={styles.tipIdKind}
              >{`Tip kind: ${tip.fields.tip_kind}`}</p>
              <p className={styles.tipIdDescription}>
                {tip.fields.tip_description}
              </p>
            </div>
          )}

          <Link className={styles.button} href={`/tips`}>
            BACK TO TIPS
          </Link>
        </div>
      </div>
    </>
  )
}
