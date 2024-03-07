'use client'

import {
  TipsContainer,
  VideosContainer,
  Modal,
  LinksContainer,
} from '@/components'
import styles from './home.module.css'
import Link from 'next/link'
import { SparklesIcon } from '@heroicons/react/24/outline'
import { Users } from '@/lib/global'
import { useState, useEffect } from 'react'
import OpenAI from 'openai'

type HomeProps = {
  user: Users
}

export default function Home({ user }: HomeProps) {
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const openai = new OpenAI({
    organization: process.env.CHAT_GPT_ORG,
    apiKey: process.env.CHAT_GPT_API_KEY,
    dangerouslyAllowBrowser: true,
  })

  async function main() {
    setOpen(true)
    const prompt = `Please, give me some motivational words. I have Myasthenia Gravis. I'm a ${user.gender} and have ${user.age}.`
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    })
    const chatGPTResponse = completion.choices[0].message.content
    setMessage(chatGPTResponse as string)
  }

  useEffect(() => {
    if (message) {
      setLoading(false)
    }
  }, [message])

  return (
    <>
      <Modal
        open={open}
        onClick={() => setOpen(!open)}
        message={message}
        loading={loading}
      />
      <div className={styles.headerPage}>
        <h1>{`Hello ${user.name}`}</h1>
      </div>
      <SparklesIcon className={styles.adviceButton} onClick={main} />
      <div className={styles.tipsContainer}>
        <div className={styles.tipsHeader}>
          <h2 className={styles.tipHeader}>Tips For you</h2>
          <Link className={styles.seeAllTipsButton} href="/tips">
            SEE ALL
          </Link>
        </div>
        <TipsContainer />
      </div>
      <div className={styles.headerMedia}>
        <h2>Videos & Links</h2>
      </div>
      <div className={styles.videosContainer}>
        <VideosContainer />
        <div className={styles.videoContainerFooter}>
          <Link className={styles.seeAllVideosButton} href="/videos">
            SEE ALL
          </Link>
        </div>
      </div>
      <div className={styles.linksContainer}>
        <LinksContainer />

        <div className={styles.videoContainerFooter}>
          <Link className={styles.seeAllVideosButton} href="/links">
            SEE ALL
          </Link>
        </div>
      </div>
    </>
  )
}
