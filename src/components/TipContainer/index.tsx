'use client'
import React, { useState, useEffect } from 'react'
import Airtable, { FieldSet, Record as AirtableRecord } from 'airtable'
import { TipRecords } from '@/lib/global'
import styles from './tipContainer.module.css'
import Link from 'next/link'

export default function TipsContainer() {
  const [records, setRecords] = useState<TipRecords[]>([])
  async function retrieveRecords() {
    let base = new Airtable({
      apiKey: process.env.AIRTABLE_PRIVATE_KEY,
    }).base(process.env.AIRTABLE_BASE_ID as string)

    base(process.env.AIRTABLE_TABLE_NAME as string)
      .select({ maxRecords: 30 })
      .eachPage(
        (
          data: ReadonlyArray<AirtableRecord<FieldSet>>,
          fetchNextPage: () => void
        ) => {
          const formattedData: TipRecords[] = data.map((record) => ({
            id: record.id,
            fields: record.fields as TipRecords['fields'],
          }))
          setRecords((prevRecords) => [...prevRecords, ...formattedData])
          fetchNextPage()
        }
      )
  }

  useEffect(() => {
    retrieveRecords()
  }, [])

  return (
    <div className={styles.tipContainer}>
      {records.map((record, key) => (
        <div className={styles.tipCard} key={key}>
          <p className={styles.tipKind}>{record.fields.tip_kind}</p>
          <div className={styles.tipBackground}>
            <p className={styles.tipTitle}>{record.fields.tip_title}</p>
          </div>
          <Link className={styles.tipButton} href={`/tips/${record.id}`}>
            MORE
          </Link>
        </div>
      ))}
    </div>
  )
}
