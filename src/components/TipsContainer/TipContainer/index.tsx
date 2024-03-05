'use client'
import React, { useState, useEffect } from 'react'
import Airtable from 'airtable'
import { TipRecords } from '@/lib/global'
import styles from './tipContainer.module.css'
import Link from 'next/link'

export default function TipContainer({
  params,
}: {
  params: { id: string }
}) {
  const id = params.id
  const [tip, setTip] = useState<TipRecords>({
    id: '',
    fields: { tip_kind: '', tip_description: '', tip_title: '' },
  })

  async function fetchTip() {
    if (id) {
      let base = new Airtable({
        apiKey: process.env.AIRTABLE_PRIVATE_KEY,
      }).base(process.env.AIRTABLE_BASE_ID as string)

      const record = await base(process.env.AIRTABLE_TABLE_NAME as string).find(
        id as string
      )

      if (record) {
        setTip({
          id: record.id,
          fields: {
            tip_kind: record.fields.tip_kind as string,
            tip_title: record.fields.tip_title as string,
            tip_description: record.fields.tip_description as string,
          },
        })
      }
    }
  }

  useEffect(() => {
    fetchTip()
  }, [id])

  return (
    <>
      <h1 className={styles.headerPage}>Tips</h1>
      <div className={styles.contentContainer}>
        <div className={styles.pageContentContainer}>
          <div className={styles.tipColor}>
            <h2 className={styles.tipIdHeader}>{tip.fields.tip_title}</h2>
            <p
              className={styles.tipIdKind}
            >{`Tip kind: ${tip.fields.tip_kind}`}</p>
            <p className={styles.tipIdDescription}>
              {tip.fields.tip_description}
            </p>
          </div>

          <Link className={styles.button} href={`/tips`}>
            BACK TO TIPS
          </Link>
        </div>
      </div>
    </>
  )
}
